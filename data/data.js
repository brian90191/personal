var cv = [
  {
    "name":"葉鎰維",
    "name_en":"Yi-Wei Ye",
    "image":"img/DSC_8108-s.jpg",
    "introduction":"是個程式開發者，喜歡用資訊的方式解決問題，主要著墨於網站系統設計、資料分析與視覺化、地理資訊等，樂愛挑戰與學習不同領域議題，享受運動並且保持開朗與正面。",
    "birthday":"1988/12/16",
    "edu_background":[
        "淡江大學, 資訊管理學碩士 (2010/09/01-2012/06/30)",
        "淡江大學, 資訊管理學學士 (2006/09/01-2010/06/30)"
    ],
    "work":[
        "衛生福利部疾病管制署研究助理 (2015/10/13-2015/12/31，短期約僱)",
        "衛生福利部疾病管制署研發替代役 (2012/11/12-2015/10/12)"
    ],
    "intern":[
        "長榮航空飛航操作風險評估系統(FORAS)專案執行 (2011-2012)",
        "淡江大學資管系教學助理：網路程式設計及資料庫設計課程各2學期 (2011-2012)",
        "和信治癌中心醫院行政系統化專案助理 (2010)",
        "TQC用書程式測試與內容校對：Windows Mobile 6行動裝置程式設計設計認證指南 (2010)"
    ],
    "dev_skill":[
        "程式語言為JavaScript、ASP.NET(C# and VB.NET)、Java",
        "前端框架為jQuery、Semantic UI、Bootstrap",
        "系統架設環境為IIS，並有Microsoft Azure使用經驗",
        "資料庫管理工具為Microsoft SQL Server",
        "常用地圖函式庫為Leaflet、Turf，Google Maps APIs及OpenLayers等亦有使用經驗",
        "常用圖表函式庫為Highcharts、D3js"
    ],
    "tool":[
        "統計軟體：SAS Base、SAS EG、SPSS",
        "GIS軟體：QGIS、ArcGIS"
    ],
    "phone":"",
    "email":"brian90191@gmail.com",
    "facebook":"https://www.facebook.com/yiwei.yeah",
    "address":"",
    "website":"http://yiwei.azurewebsites.net"
  }
]


var achievement = [
  {
    "title":"傳染病統計資料查詢系統",
    "introduction":"傳染病統計資料查詢系統提供一般民眾、學術界、醫療服務業及公共衛生部門能以線上查詢方式，獲得所需之最新台灣法定傳染病統計資訊。",
    "description":"本系統是疾病管制署提供疾病統計資料的重要系統，涵蓋了法定傳染病確定病例統計資料、健保的疾病監測以及醫院急診的傳染病監測，在這系統上以趨勢圖、地理統計圖、比較圖和資料表格式呈現，提供使用者依各種疾病條件快速查詢和下載相關統計資料與圖檔，而這個查詢系統也有英文版本，讓國外的使用者也能夠輕鬆使用。<br/>在本系統我主要擔任圖表資料的規劃與製作，過去此系統舊版是採用flash呈現各項圖表，為了讓各種裝置和瀏覽器都能使用，改採用Highcharts及Highmaps套件進行開發，並同時提供友善的資料與圖片下載介面。",
    "link_public":1,
    "link":"http://nidss.cdc.gov.tw/",
    "image":["img/achievement/nidss_img1.png","img/achievement/nidss_img2.png","img/achievement/nidss_img3.png","img/achievement/nidss_img4.png"]
  },
  {
    "title":"登革熱病例群聚地圖",
    "introduction":"提供各縣市登革熱病例地理分布、每日趨勢、群聚分析以及疫情動態擴散之視覺化展示，以最小統計區點位供民眾即時查詢和瞭解疫情發展。",
    "description":"在2014年-2015年兩年當中，高雄市及台南市分別爆發登革熱疫情的大流行，而為了因應這樣的登革熱疫情威脅，並且為推動全民共同防疫，製作此對外的視覺化展示平台，讓民眾更了解登革熱疫情的發展態勢，一面也藉由此平台的推動，將過去未開放的登革熱每日病例、病媒蚊調查等以開放資料提供外界使用。<br/>本系統的開發建置由我一人獨力完成，包含內部系統的疫病資料去識別、SQL Azure資料同步(每日)、Web App建置開發等，而在資料呈現上則利用GIS的視覺化(使用Leaflet)及趨勢圖表(使用Highcharts)。",
    "link_public":1,
    "link":"http://cdcdengue.azurewebsites.net/",
    "image":["img/achievement/cdcdengue_img1.png","img/achievement/cdcdengue_img2.png","img/achievement/cdcdengue_img3.png","img/achievement/cdcdengue_img4.png","img/achievement/cdcdengue_img5.png","img/achievement/cdcdengue_img6.png"]
  },
  {
    "title":"疾病管制署疫情資料協作平台",
    "introduction":"本平台為疾管署與各區管制中心、縣市衛生局進行去識別之疫情資料交換平台，以office 365平台建置，並於報表分析使用微軟Power BI。",
    "description":"考量疾病管制署內部、其各區管制中心及縣市衛生局常有統計圖表交換需求，所以在2015年利用office 365建置此平台，並且將常用疫病統計資料均同步至SQL Azure，使用者能透過微軟Power BI工具介接資料，並直接以拖拉點選的方式繪製動態的圖表，報表資料則能上傳Office 365進行分享及報表展示，防疫單位間快速交換疫情資訊，而Office 365平台亦提供良好的人員與功能管理機制。<br/>此平台我主要負責功能建置、設定與Power BI使用教學，建置作業包含office 365平台購置、office 365帳號授權購置、sharepoint online功能設計、SQL Azure資料同步、相關人員帳號權限設定等。",
    "link_public":1,
    "link":"http://cloud.cdc.gov.tw/",
    "image":["img/achievement/CDCPortal_img1.png","img/achievement/CDCPortal_img2.png","img/achievement/CDCPortal_img3.png","img/achievement/CDCPortal_img4.png","img/achievement/CDCPortal_img5.png","img/achievement/CDCPortal_img6.png"]
  },
  {
    "title":"病媒蚊孳生源列管系統",
    "introduction":"本系統為疾病管制署內部的登革熱疫情管理系統，包含個案座標維護、各式查詢(環域、統計區、密度分析等)、病媒蚊指標及氣象指標等。",
    "description":"本系統是疾管署內部針對登革熱個案進行GIS管理與查詢的系統，包含座標的維護管理，環域及行政區分析、密度分析、聚集區域分析，並可以搭配病媒蚊及氣象因子呈現，提供內部防疫人員監測使用；另也透過本系統將法定傳染病個案進行座標及最小統計區轉譯，分別使用內政部TGOS地址定位服務及最小統計區比對服務。<br/>本系統於疾管署為委外建置，我主要擔任需求規劃及系統管理，也因為管理此系統需要，常接觸QGIS及ArcGIS等地理資訊軟體，因此對於GIS的概念和方面的操作都算熟悉。",
    "link_public":0,
    "link":"",
    "image":["img/achievement/gis_img1.png","img/achievement/gis_img2.png","img/achievement/gis_img3.png","img/achievement/gis_img4.png"]
  },
  {
    "title":"疾管署開放資料加值與推動",
    "introduction":"將70餘種法定傳染病病例數均加值成開放資料，以及更詳細之登革熱病例與防治資訊、急診與健保的疾病監測、國際疫情監測資訊等。",
    "description":"截至2015年12月，疾管署於政府資料開放平台總計開放182項開放資料，其中由我進行加值的資料包含69項法定傳染病統計、健保與急診傳染病監測統計、國際疫情監測資訊、登革熱每日病例統計與病媒蚊調查等資料，均透過排程程式每日或每周自動更新，而這期間也積極瞭解社群需求，並持續參與單位內的開放資料推動。",
    "link_public":1,
    "link":"http://data.gov.tw/taxonomy/term/513",
    "image":["img/achievement/opendata_img1.png","img/achievement/opendata_img2.png","img/achievement/opendata_img3.png","img/achievement/opendata_img4.png"]
  },
  {
    "title":"飛航操作風險評估系統",
    "introduction":"研究所時期時與長榮航空合作開發飛航操作風險評估系統(FORAS)，可對航班飛航安全的風險進行評估，運算出決策風險值，提供飛行員以及安管人員作參考。",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/achievement/foras_img1.png","img/achievement/foras_img2.png","img/achievement/foras_img3.png","img/achievement/foras_img4.png"]
  }
]


var project = [
  {
    "title":"防疫雲計畫",
    "introduction":"防疫雲計畫是衛福部健康雲下的子計畫，主要為輔導醫院運用醫院電子病歷進行傳染病通報，以及導入醫院實驗室的傳染病自動通報作為病原體監測。",
    "description":"",
    "link_public":1,
    "link":"",
    "image":["img/project/comm_img1.png","img/project/comm_img2.png","img/project/comm_img3.png","img/project/comm_img4.png"]
  },
  {
    "title":"最小統計區合作與應用",
    "introduction":"與內政部及中研院合作，將傳染病個案地址除了轉座標外，一併加值出地址識別之最小統計區，可避免資料開放時的隱私問題，進而提升外界的資料應用。",
    "description":"",
    "link_public":1,
    "link":"",
    "image":["img/project/stat_img1.png","img/project/stat_img2.png","img/project/stat_img3.png","img/project/stat_img4.jpg"]
  },
  {
    "title":"微軟Power BI應用推廣",
    "introduction":"疾管署於2015年導入微軟Power BI，使資料分析人員能快速產製視覺化報表，本應用包含內部系統建置、課程學習、實作，並擔任教育訓練種子師資。",
    "description":"",
    "link_public":1,
    "link":"",
    "image":["img/project/powerbi_img1.png","img/project/powerbi_img2.png","img/project/powerbi_img3.png"]
  },
  {
    "title":"災害示警細胞廣播(CBS)",
    "introduction":"防災科技中心推出示警平台，各部會能以此管道發布災害示警資訊，疾管署與該單位合作進行國內外傳染病示警，使民眾能快速取得傳染病和防範資訊。",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/project/cap_img1.png","img/project/cap_img2.png","img/project/cap_img3.png","img/project/cap_img4.png"]
  }
]


var publication = [
  {
    "author":"張啟明、羅于竣、葉鎰維、楊祥麟、劉定萍",
    "description":"建構協同式防疫統計資料雲端服務系統之研究 (2015年6月)。2015年國際醫學資訊聯合研討會，長庚大學，新北市。",
    "type":"研討會論文"
  },
  {
    "author":"張啟明、郭宏偉、葉鎰維、劉宇倫、莊人祥",
    "description":"以防疫資訊交換平台為基礎利用LOINC的標準建構實驗室疫情監測系統(2014年11月)。2014年國際醫學資訊聯合研討會，國立臺北護理健康大學，臺北市。",
    "type":"研討會論文"
  },
  {
    "author":"Chi-Ming Chang, Hung-Wei Kuo, Yi-Wei Ye, Yu-Lun Liu, Jen-Hsiang Chuang",
    "description":"Implementation of a nationwide automated laboratory reporting system for infectious disease surveillance based on the epidemic information exchange platform and the use of LOINC standard. JTAMI Volume 24, Issue 1, March 2015, pp. 1-10",
    "type":"期刊論文"
  },
  {
    "author":"劉宇倫、張啟明、劉定萍、郭宏偉、蔡陳緯、葉鎰維、莊人祥",
    "description":"於我國機場發燒篩檢能偵測到伊波拉病毒境外移入的機率推估，疾病管制署疫情報導，第30卷第20期，2014年10月。",
    "type":"刊物文章"
  },
  {
    "author":"葉鎰維",
    "description":"基於雲端運算的飛航作業風險評估架構，碩士論文，淡江大學資訊管理學系，2012。",
    "type":"碩士畢業論文"
  }
]
