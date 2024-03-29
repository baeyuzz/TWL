### intro

![이름겹치면안됨.JPG](https://firebasestorage.googleapis.com/v0/b/twl-image-storage.appspot.com/o/%EC%9D%B4%EB%A6%84%EA%B2%B9%EC%B9%98%EB%A9%B4%EC%95%88%EB%90%A8.JPG?alt=media&token=3df16f72-6103-4987-83a9-07eb235339c6)

이미지를 base64 스트링 형태로 DB에 저장할 수도 있지만, 이를 관계형 DB에 바로 저장하는 것은 여러모로 바람직하지 못하다. base64로 인코딩된 결과물은 이미지의 크기에 정비례하기 때문이다. 예를 들어 2mb 짜리 이미지를 b64로 인코딩하면 2mb 짜리 스트링으로 변환되고 DB에 그대로 저장된다. 클라이언트 딴에서도 해당 용량 만큼의 스트링을 불러와 화면에 띄워줘야 하기 때문에 로딩 속도에도 영향을 미친다. 

**따라서 이미지를 외부 스토리지에 저장하고, 저장된 url을 DB에 저장하는 것을 추천한다.**

이를 위해 클라우드 스토리지가 필요한데 대표적으로 AWS의 S3, 구글의 Firebase가 있다. 
해당 포스트에서는 파이어베이스와 뷰를 활용해 클라이언트의 이미지를 스토리지로 보내고 URL을 리턴하는 방식을 소개하려 한다. 

### Firebase 버킷 생성하기


##### 우선 프로젝트를 추가한다. 

![제목 없는 프레젠테이션](https://user-images.githubusercontent.com/53211781/90147798-8baab780-ddbd-11ea-87ac-4ee96e41182b.png)

##### 프로젝트 설정으로 들어간다.

![제목 없는 프레젠테이션 (1)](https://user-images.githubusercontent.com/53211781/90148041-d88e8e00-ddbd-11ea-9e87-3ce3a25e443c.png)

##### 웹 앱을 만들어 클라이언트와 연결하기 위한 키를 생성한다.

![제목 없는 프레젠테이션 (2)](https://user-images.githubusercontent.com/53211781/90148286-23a8a100-ddbe-11ea-9493-0f8ac71a84ad.png)

해당 키는 노출이 되면 안되기 때문에 클라이언트에서는 **환경변수로 저장**하고 깃 저장소에 올라가지 않도록 한다.

##### 스토리지 권한 설정을 통해 모든 유저가 파이어베이스 스토리지에 이미지 저장이 가능하게 한다. 

![image](https://user-images.githubusercontent.com/53211781/90148608-77b38580-ddbe-11ea-861c-6ced7045dc6b.png)

**권한 설정을 하는 다양한 방법들에 대해서는 파이어베이스 공식 문서를 참고한다.**

### Vue Js에 연결하기

> vue에서 파이어베이스 스토리지를 연결하기 위해서는 firebase 라이브러리가 필요하다. 해당 라이브러리의 매서드를 통해 입력받은 이미지를 스토리지로 저장하고 저장된 url을 리턴받을 수 있다. 

```bash
$ npm i firebase
```

#### `main.js`에 등록하기

발급받은 sdk 키를 빠짐없이 입력한다. 누차 강조하지만 깃 저장소에 올라가지 않도록 `환경변수화` 및 `.gitignore` 저장과 같은 **보안을 생활화하자.**

```javascript
import firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

#### 실제 연결하기

##### 이미지 데이터를 다음과 같이 정의한다. 

```javascript
data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
```

##### blob 객체로 만들어진 이미지를 스토리지에 저장하고 url을 리턴받는다. 

우선 이미지를 blob 객체로 만들어 준비해야 한다. blob 객체를 만드는 방법은 [이전 포스팅](http://i3a407.p.ssafy.io/33)을 참고하길 바란다. 
해당 객체를 파이어스토리지로 전송하고,  현재 저장 상태가 몇 퍼센트 진행되었는지 표시하기 위해 `uploadValue`를 실시간으로 업데이트 할 수 있으며, 실패 시 에러를 출력한다. 
마지막으로 다운로드 url을 받을 수 있으며 사용처는 각자의 목적에 따라 다르게 사용할 수 있다. 예를 들어, 이를 사용자에게 보여주거나 DB에 저장하기 위해 다른 곳에 저장해 둘 수 도 있다. 

```javascript
this.imageData = blob
const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
storageRef.on(`state_changed`, snapshot => {
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
},
  error => {console.log(error.message)},
  () => {
    this.uploadValue = 100
    storageRef.snapshot.ref.getDownloadURL()
      .then(url => callback(url, this.imageData.name))
  }
)
```

![image.png](https://firebasestorage.googleapis.com/v0/b/twl-image-storage.appspot.com/o/image.png?alt=media&token=25b91fb5-cf8d-4ff9-956f-93bad785f83e)

본인은 깃허브 이슈작성처럼 에디터 창에 드래그앤 드랍을 통해 이미지 url을 리턴받는 것을 구현하려 했기 때문에 다음과 같이 활용하였다. 

해당 url을 브라우저에 쳐보면 저장된 이미지가 그대로 출력되고, 파이어 스토리지에도 정확히 저장됨을 확인할 수 있다. 