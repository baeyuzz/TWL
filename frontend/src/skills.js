const skills = [
"3Ds Max",
"ABBYY Real-Time Recognition SDK",
"Adobe Fuse",
"Adobe XD",
"AEM(Adobe Experience Manager)",
"AI",
"Ajax",
"Amazon Kinesis",
"ANSYS",
"Apache",
"Apache Airflow",
"Apache Bigtop",
"Apache Bloodhound",
"Apache BookKeeper",
"Apache Buildr",
"Apache Cordova",
"Apache Eagle",
"Apache Falcon",
"Apache Felix",
"Apache Hadoop",
"Apache Hama",
"Apache HAWQ",
"Apache Hive",
"Apache Isis",
"Apache jclouds",
"Apache JSPWiki",
"Apache jUDDI",
"Apache Juneau",
"Apache Kafka",
"Apache Karaf",
"Apache Knox",
"Apache Kylin",
"Apache Lens",
"Apache Logging",
"Apache Lucene.Net",
"Apache MADlib",
"Apache Mnemonic",
"Apache Mynewt",
"Apache Nifi",
"Apache Nutch",
"Apache ODE",
"Apache Olingo",
"Apache OODT",
"Apache Open Climate Workbench",
"Apache OpenJPA",
"Apache OpenWebBeans",
"Apache OpenWhisk",
"Apache Perl",
"Apache Phoenix",
"Apache Pulsar",
"Apache Qpid",
"Apache REEF",
"Apache Samza",
"Apache Sling",
"Apache Sqoop",
"Apache Storm",
"Apache Syncope",
"Apache Tajo",
"Apache Thrift",
"Apache Tika",
"Apache Traffic Control",
"Apache Trafodion",
"Apache Twill",
"Apache UIMA",
"Apache Unomi",
"Apache Usergrid",
"Apache Web Services",
"Apache Whimsy",
"Apache Wicket",
"Apache Xalan",
"Apache Xerces",
"Apache XML Graphics",
"Apache XMLBeans",
"Apache Yetus",
"Apache Zeppelin",
"Apache ZooKeeper",
"App Inventor",
"Appium",
"ArcGIS",
"ATL(ATL Transformation Language)",
"Auth0",
"AutoCAD",
"AWS Alexa",
"AWS Alexa Skills",
"AWS Application Discovery Service",
"AWS Backup",
"AWS Budgets",
"AWS EFS",
"AWS Elastic Transcoder",
"AWS ElastiCache",
"AWS ElasticBeanstalk",
"AWS Elasticsearch Service",
"AWS Forecast",
"AWS IAM",
"AWS Inspector",
"AWS IoT Analytics",
"AWS IoT Core",
"AWS IoT Events",
"AWS Kinesis",
"AWS License Manager",
"AWS MediaConvert",
"AWS MediaPackage",
"AWS Migration Hub",
"AWS Mobile Hub",
"AWS QuickSight",
"AWS RDS",
"AWS Rekognition",
"AWS Route 53",
"AWS Simple Notification Service(AWS SNS)",
"AWS Simple Queue Service(AWS SQS)",
"AWS WorkSpaces",
"AWS X-Ray",
"Azure API Management",
"Azure Batch",
"Azure Bing Image Search",
"Azure Bing Visual Search",
"Azure Bing Web Search",
"Azure Bot Service",
"Azure Computer Vision",
"Azure Container Registry",
"Azure Content Delivery Network",
"Azure Content Protection",
"Azure Data Catalog",
"Azure Data Explorer",
"Azure Data Lake Analytics",
"Azure Data Lake Storage",
"Azure Database for MySQL",
"Azure Dedicated HSM",
"Azure Digital Twins",
"Azure File Storage",
"Azure Functions",
"Azure IoT Hub",
"Azure Key Vault",
"Azure Kinect DK",
"Azure Kubernetes Service (AKS)",
"Azure Language Understanding",
"Azure Linguistic Analysis",
"Azure Load Balancer",
"Azure Maps",
"Azure Migrate",
"Azure Mobile Apps",
"Azure Network Watcher",
"Azure Notification Hubs",
"Azure QnA Maker",
"Azure Queue Storage",
"Azure R Server for HDInsight",
"Azure Remote Rendering",
"Azure SAP HANA on Large Instances",
"Azure Time Series Insights",
"Azure Virtual Machine Scale Sets",
"Azure Virtual Network",
"Azure Virtual WAN",
"Azure Web Apps",
"Azure Xamarin",
"Babylon.js",
"Backbone.js",
"Battery Management System(BMS)",
"Big Data",
"billboard.js",
"BitBucket",
"BlueZ",
"Bottle",
"C",
"C#",
"C++",
"C3.js",
"Caffe(Convolutional Architecture for Fast Feature Embedding)",
"CAPL",
"CATIA",
"centOS",
"Chrome Extension",
"CircleCI",
"Codeception",
"CodeIgniter",
"Composer",
"Constrained Application Protocol(CoAP)",
"Consul",
"Dagger2",
"Dart",
"Data Binding",
"Data visualization",
"Db2",
"Deep Learning",
"DigitalOcean",
"Django",
"Django Channels",
"Docker",
"Drupal",
"DSP(Digital Signal Processing)",
"EJS",
"Element UI",
"Entity Framework",
"Enzyme",
"ESLint",
"Esper",
"Expo",
"ExpressJS",
"EXTJS",
"Fastly",
"FeathersJS",
"Filebeat",
"Finagle",
"Finatra",
"Firebase",
"Flask",
"flutter",
"Framework7",
"Functional JS",
"Git",
"GitHub",
"Google Access Transparency",
"Google Adwords",
"Google AI Hub",
"Google Apigee API Platform",
"Google Apigee healthcare APIx",
"Google BigQuery",
"Google Binary Authorization",
"Google Cloud Build",
"Google Cloud Dataprep",
"Google Cloud Dataproc",
"Google Cloud Deep Learning VM Image",
"Google Cloud Deployment Manager",
"Google Cloud Endpoints",
"Google Cloud Functions",
"Google Cloud Healthcare API",
"Google Cloud HSM",
"Google Cloud Identity-Aware Proxy",
"Google Cloud Inference API",
"Google Cloud IoT Edge",
"Google Cloud Key Management Service",
"Google Cloud Natural Language",
"Google Cloud Shell",
"Google Cloud Source Repositories",
"Google Cloud Storage Transfer Service",
"Google Cloud Test Lab",
"Google Cloud Tools for IntelliJ",
"Google Cloud TPU",
"Google Compute Engine",
"Google Cost management",
"Google CSP Config Management",
"Google Dialogflow",
"Google Error Reporting",
"Google Fastbase",
"Google Gradle App Engine Plugin",
"Google Graphics Processing Unit",
"Google Istio on GKE",
"Google Knative",
"Google Logging",
"Google Maps API",
"Google Orbitera White-Label Marketplace",
"Google Play Game Service",
"Google Profiler",
"Google Tag Manager",
"Google Trace",
"Google Transparent Service Level Indicators",
"Google Velostrata",
"Google VM Migration",
"Google VPC Service Controls",
"Google Zync Render",
"GPUImage",
"Grails Framework",
"Grapevine",
"GraphQL",
"gRPC",
"H2 Database",
"Hapi.js",
"Haskell",
"Heroku",
"Hexagon.js",
"Hibernate",
"HLS(HTTP Live Streaming)",
"HLSL",
"HTML",
"IBM Cloud",
"IBM High Performance Services",
"IBM SPSS Amos",
"IBM Watson APIs",
"INFORMIX",
"ITK",
"Jabbix",
"Jade",
"Java",
"Java Persistence API",
"JDBC(Java Database Connectivity)",
"Jenkins",
"Jest",
"Jetpack",
"JFace",
"Jinja",
"JNI(Java Native Interface)",
"Jooq",
"JPA(Java Persistent API)",
"jQuery",
"jQuery Mobile",
"Jsoup",
"JSP",
"JSS",
"JSX",
"JUnit",
"Jupyter",
"Kakao Map API",
"KakaoLink API",
"KakaoMoment API",
"KakaoTalk API",
"Kendo UI",
"Kepware",
"Kibana",
"Klaytn",
"Knockout.js",
"Koa.js",
"Koin",
"Kubernetes",
"LabVIEW",
"Leaflet",
"LibROSA",
"libseccomp",
"Lodash",
"Logback",
"LustreFs",
"Machine Learning",
"ML Kit",
"Mobius",
"MobX",
"Mocha",
"MVC",
"Naver Clova API",
"Naver Map API",
"Ndk",
"Neo4j",
"Neos",
"NestJS",
"Network",
"New Relic",
"Next.js",
"Nexus",
"nGrinder",
"NgRx",
"NHN Toast Compute",
"NMS(Network Management System)",
"Node.js",
"NoSQL",
"Numpy",
"OAuth",
"OGRE(Object-Oriented Graphics Rendering Engine)",
"OkHttp",
"OOP",
"OpenCL",
"OpenCV",
"OpenFlow",
"OpenMP",
"openpyxl",
"OpenShift",
"OpenStack",
"Oracle",
"Oracle Forms",
"OrmLite",
"Parse Server",
"Passport.js",
"Phalcon Framework",
"Phaser",
"PHP",
"Physijs",
"Physx",
"PKI(Public key infrastructure)",
"PlusFriend API",
"Poco",
"POSIX Library",
"Pygame",
"PySpark",
"Python",
"PyTorch",
"QML",
"Qt",
"Quartz",
"Quasar Framework",
"Qubicle",
"Querydsl",
"R",
"RabbitMQ",
"React Native",
"React Native Router",
"Red Hat Ceph Storage",
"Redux-Thunk",
"Responsive Web",
"Retrofit",
"Retrofit2",
"RTCMultiConnection",
"Ruby",
"Ruby Motion",
"RxJS",
"SAS",
"SDL(Simple DirectMedia Layer)",
"Selenium",
"Semantic UI",
"SOAP",
"SockJS",
"Spring",
"SQL",
"STS",
"Super Resolution",
"SVN(Apache Subversion)",
"Swagger",
"Swift",
"SWT(Standard Widget Toolkit)",
"Sybase IQ",
"T map API",
"Tacotron",
"Tesseract OCR",
"TestFX",
"ThreeJS",
"Truffle",
"TrustZone",
"TrustZone API",
"Ubuntu",
"uDebug",
"Ultralight",
"UML",
"Underscore.js",
"Unity",
"Unity ML-Agents",
"Unix",
"Unreal Engine",
"Upbit API",
"Urwid",
"UWP",
"uWSGI",
"Vagrant",
"VB .NET",
"VBScript",
"VHDL",
"Visual Basic",
"Voxel",
"VR",
"VTK",
"Vue CLI",
"Vue.js",
"VuePress",
"Vuetify.js",
"Vuex",
"Vuforia",
"Web3.py",
"web3j",
"web3Swift",
"WebFlux",
"WebGL",
"WebGPU",
"WebRTC",
"WebSocket",
"Windows Embedded",
"WIPI(Wireless Internet Platform for Interoperability)",
"Wireframe",
"wsgi",
"Xamarin",
"XAML",
"XGBoost",
"XML",
"XMPP",
"Xplatform",
"XpressEngine",
"Xtext",
"Yara",
"Yarn",
"Yii PHP Framework",
"Yocto Project",
"YOLO",
"Yona",
"YouTube Data API",
"YTS.AG API",
"Zappa",
"ZEIT",
"Zephyr",
"Zeplin",
"Zeroboard",
"ZeroMQ",
"Zuul",
"ZXing"
]

export default skills