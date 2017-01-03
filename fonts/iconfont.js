;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M493.497089 232.476749 130.925377 232.476749 130.925377 891.651716 839.558779 891.651716 839.558779 578.552765 888.996748 578.552765 888.996748 941.090708 81.486384 941.090708 81.486384 183.037756 493.497089 183.037756Z"  ></path>' +
    '' +
    '<path d="M607.71341 97.388051l17.607006-46.204321L971.394387 183.037756l-28.129664 42.197054L607.71341 97.388051M929.198356 166.959569l42.195008 16.077164L773.637394 479.672734 732.503555 452.234825l191.511755-287.25433M943.263699 225.234811l28.129664-42.197054 0 0L943.263699 225.234811 943.263699 225.234811 943.263699 225.234811zM971.394387 183.037756l-42.195008-16.077164L971.394387 183.037756 971.394387 183.037756 971.394387 183.037756 971.394387 183.037756z"  ></path>' +
    '' +
    '<path d="M410.905022 780.445962l-49.278333-3.990894c0.595564-7.033184 52.690036-616.238063 560.327682-593.417311l-2.221598 49.374524c-456.249255-20.503986-506.896772 524.69616-508.827751 547.889395L410.905022 780.445962"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-users" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M947.2 921.6l-563.2 0c-42.3424 0-76.8-34.4576-76.8-76.8 0-2.4576 0.5632-60.928 47.3088-118.528 26.88-33.0752 63.5392-59.2896 108.9536-77.9264 54.8352-22.528 122.88-33.8944 202.1376-33.8944s147.2512 11.4176 202.1376 33.8944c45.4144 18.6368 82.0736 44.8512 108.9536 77.9264 46.7968 57.6 47.3088 116.0704 47.3088 118.528 0 42.3424-34.4576 76.8-76.8 76.8zM358.4 844.9536c0.0512 14.08 11.52 25.4464 25.6 25.4464l563.2 0c14.08 0 25.5488-11.4176 25.6-25.4464-0.0512-1.792-1.6384-45.824-37.8368-88.7808-49.8688-59.2384-143.0016-90.5216-269.3632-90.5216s-219.4944 31.3344-269.3632 90.5216c-36.1984 43.008-37.7856 86.9888-37.8368 88.7808z"  ></path>' +
    '' +
    '<path d="M665.6 563.2c-112.9472 0-204.8-91.8528-204.8-204.8s91.8528-204.8 204.8-204.8 204.8 91.8528 204.8 204.8c0 112.9472-91.8528 204.8-204.8 204.8zM665.6 204.8c-84.6848 0-153.6 68.9152-153.6 153.6s68.9152 153.6 153.6 153.6 153.6-68.9152 153.6-153.6-68.9152-153.6-153.6-153.6z"  ></path>' +
    '' +
    '<path d="M230.4 921.6l-153.6 0c-42.3424 0-76.8-34.4576-76.8-76.8 0-1.8944 0.4096-47.4624 33.9456-92.16 19.3536-25.856 45.7728-46.2848 78.4896-60.8256 39.1168-17.408 87.4496-26.2144 143.616-26.2144 9.1648 0 18.2272 0.256 26.9824 0.7168 14.1312 0.768 24.9344 12.8 24.2176 26.9312s-12.8 24.9856-26.9312 24.2176c-7.8336-0.4096-15.9744-0.6144-24.2176-0.6144-199.3728 0-204.6464 121.8048-204.8 128.1536 0.0512 14.0288 11.52 25.4464 25.6 25.4464l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"  ></path>' +
    '' +
    '<path d="M256 614.4c-84.6848 0-153.6-68.9152-153.6-153.6s68.9152-153.6 153.6-153.6 153.6 68.9152 153.6 153.6-68.9152 153.6-153.6 153.6zM256 358.4c-56.4736 0-102.4 45.9264-102.4 102.4s45.9264 102.4 102.4 102.4 102.4-45.9264 102.4-102.4c0-56.4736-45.9264-102.4-102.4-102.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fankui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.517553 846.109474 117.872594 846.109474 117.872594 27.464515 609.05957 27.464515 609.05957 82.040505 172.448584 82.040505 172.448584 791.533484 881.941564 791.533484 881.941564 436.786994 936.517553 436.786994Z"  ></path>' +
    '' +
    '<path d="M247.309572 773.706467l14.980179-45.518706c9.903557-30.109762 127.523395-262.152629 193.109136-342.197686 80.055291-97.713462 177.809685-181.63685 298.847365-256.5664 35.155684-21.774933 114.792443-63.717184 118.160143-65.485457l38.074154-20.036335-8.473999 42.171472c-3.357468 16.718777-32.967856 163.909094-38.763862 184.444802-3.946892 14.000875-12.730952 24.313755-26.112728 30.629601-17.727757 8.394181-43.7402 20.835538-67.674309 32.328289 12.781094 0.369414 24.033369 0.199545 30.598902-0.079818l34.476209-1.469468-15.249309 30.959106c-3.367701 6.844895-33.777291 67.554582-62.457494 89.908706-12.821003 9.993608-25.142633 17.268292-43.61024 20.286022l-23.2444 3.747347c-9.383718 1.499144-21.155832 3.388167-33.327036 5.366218l48.376801 20.22667-21.126156 21.554922c-25.362644 25.892717-92.437296 84.10349-167.866219 65.095577-21.255093-5.336542-37.654598-7.804756-53.193503-7.995091-10.033517 0.140193-17.258059 2.898003-23.173792 9.484002-18.647709 20.786419-40.082904 55.822376-45.918819 87.240947-2.26867 12.201903-6.655584 24.703635-23.263843 33.507138l-21.325701 11.422144c-18.73776 10.092869-38.10383 20.526499-58.600653 30.319539L247.309572 773.706467zM853.268524 120.558773c-25.942859 14.020318-58.810431 32.108279-77.477582 43.660382C658.660244 236.739842 564.214199 317.765227 487.056911 411.930887c-47.62774 58.130955-123.156948 199.305255-161.780617 277.162484 1.488911-0.799202 2.977821-1.599428 4.456498-2.39863l21.585621-11.562337c1.069355-0.440022 1.539053-1.409093 2.168386-4.806469 7.794523-41.921785 34.876322-83.892689 55.711859-107.107413 13.780865-15.359826 32.527834-23.034623 54.143131-23.074531 18.857487 0.239454 38.183647 3.088338 62.657039 9.233292 40.013319 10.013051 79.415724-12.351306 105.658412-33.267685l-110.315478-46.128597 57.690934-15.579837c10.522658-2.837628 53.53324-9.832949 104.448864-17.987676l23.133883-3.727904c9.033747-1.478677 15.119349-4.437056 25.043373-12.172227 10.243295-7.984858 23.554462-27.311019 34.746362-46.13883-23.194258-0.729617-52.744271-3.27765-73.460082-10.772344l-43.190685-15.649422 40.522925-21.644973c5.007037-2.677992 92.047416-44.499493 129.352043-62.157665 2.837628-1.348718 3.547803-2.367931 4.217045-4.747117C827.306222 247.142773 842.316078 174.412308 853.268524 120.558773z"  ></path>' +
    '' +
    '<path d="M909.229047 436.786994m-27.288506 0a26.667 26.667 0 1 0 54.577013 0 26.667 26.667 0 1 0-54.577013 0Z"  ></path>' +
    '' +
    '<path d="M609.05957 54.753021m-27.288506 0a26.667 26.667 0 1 0 54.577013 0 26.667 26.667 0 1 0-54.577013 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guowanghuangguan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M861.116259 760.453628c78.171384-76.038814 88.62548-204.060559 24.127514-291.902186-30.835286-41.995463-76.559677-71.879074-127.037325-84.394109-24.969695-6.191003-50.951439-8.150634-76.55763-5.608741-12.130272 1.204431-24.160259 3.400446-35.922141 6.607488-11.453866 3.123131-29.241998 14.217816-39.950897 12.616342-8.211009-1.227967-17.766642-7.458879-25.89067-9.985422-8.862855-2.755764-17.890462-4.942569-27.02347-6.592139-3.626597-0.654916-25.869181-1.056052-27.51875-3.298116-0.724501-0.985444 0.319272-4.119831 0-5.239328-3.808746-13.351076 0-32.756031 0-46.77942 46.376237-6.179746 83.34215-46.594201 85.945441-93.222171 2.607384-46.694485-30.264281-89.923032-75.371618-101.342106-45.442982-11.504008-93.826945 12.576433-113.684202 54.712089-20.189831 42.841737-5.367241 94.900394 32.827663 122.314767 10.298554 7.391341 22.047132 12.817933 34.383088 15.755846 10.411117 2.480494 9.614985 0.669242 9.614985 10.55438 0 14.415314 0 28.830629 0 43.245943-13.345959 0.781806-26.618241 2.737344-39.623439 5.823636-7.019881 1.665942-13.967106 3.645017-20.791535 5.990434-6.262634 2.152013-16.720823 9.543354-22.809495 9.355065-8.743128-0.270153-21.333888-9.126868-30.075992-11.834536-10.906397-3.377934-22.065552-5.885034-33.366945-7.512091-44.62843-6.427386-90.852194 1.091868-131.352607 20.827351-83.33908 40.61093-132.470057 129.960911-123.441427 222.048235 5.085832 51.871391 28.253484 101.455693 65.685002 137.860834-35.409464 17.517979-47.871287 60.511165-31.020504 95.523587 12.459776 25.888624 36.85028 38.761815 64.84896 39.274492 36.702923 0.672312 73.481571 0 110.188588 0 137.967258 0 275.934516 0 413.901775 0 36.201503 0 72.403007 0 108.60451 0C902.116045 895.254777 925.793304 792.43911 861.116259 760.453628zM512.201591 154.63487c35.730783 0 65.412802 25.863041 71.637574 59.824527L440.564018 214.459397C446.788789 180.49791 476.470809 154.63487 512.201591 154.63487zM440.564018 240.74404l143.275147 0C569.612139 318.363861 454.787974 318.350558 440.564018 240.74404zM122.144898 600.564082c0-133.032876 140.191926-231.321436 265.139659-185.05674-80.101339 54.218856-116.993574 158.781306-88.548732 251.223718 2.264577 7.360641 4.520967 19.268856 11.137665 24.152073 8.327666 6.144954 18.945491 1.224898 20.146852-8.637728 1.180895-9.689686-5.894244-21.74628-8.316409-30.874171-4.101411-15.458063-6.312776-31.386848-6.605442-47.379077-1.000793-54.578036 21.760606-108.343567 61.347207-145.872299 71.748091-68.019163 188.249455-71.478961 263.507486-7.218402 40.509622 34.589796 65.897849 84.938508 69.001537 138.158616 1.676176 28.741601-4.455475 54.209646-12.377912 81.45108-2.411933 8.29185-5.053086 18.114566 5.134951 22.306029 6.333242 2.606361 11.17348-0.25071 15.423271-4.843308 11.147898-12.046361 13.334703-34.42709 15.556301-49.90255 3.822049-26.627451 3.961218-53.486168-1.163499-79.967286-11.157107-57.653071-45.802162-109.693308-94.409207-142.594649 89.537246-33.152051 194.647165 6.55223 240.683664 90.01206 22.066575 40.005133 28.992311 87.325881 20.342304 132.107807-4.27435 22.128997-12.273535 43.537586-23.64042 63.002916-5.748934 9.844206-12.352329 19.190061-19.727297 27.884071-4.066619 4.793166-18.498306 24.365944-24.970718 24.365944L194.598047 752.882186c-0.066515 0-0.125867 0.019443-0.192382 0.019443C148.521638 715.27773 122.144898 660.08264 122.144898 600.564082zM829.805136 868.970134 194.598047 868.970134c-34.516118 0-53.416584-37.771255-38.202067-67.385736 9.087982-17.690918 26.219151-22.320355 44.537356-22.419616 40.135092-0.218988 80.277348 0 120.413464 0 134.63435 0 269.2687 0 403.90305 0 34.851763 0 69.704548 0 104.556311 0C887.669008 779.164782 887.792828 868.970134 829.805136 868.970134z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huodong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.588 9.988c-5.845-3.774-26.861-14.265-51.857 9.259-3.143 2.952-6.23 5.888-9.288 8.795-65.137 61.887-108.169 102.777-347.154 22.385-64.314-21.633-129.684-31.287-194.293-28.698-51.75 2.072-103.062 11.968-152.497 29.409C118.031 80.93 68.052 122.549 65.967 124.303c-1.849 1.557-3.445 3.288-4.813 5.155-12.227 7.608-17.308 23.247-11.308 36.789l369.964 835.892c6.561 14.832 23.897 21.527 38.724 14.965 14.825-6.561 21.527-23.897 14.965-38.723L302.03 590.96c0.947-1.804 1.904-3.632 2.881-5.491 38.896-74.309 82.988-158.527 309.512-138.435 41.301 3.664 81.698-3.115 120.191-20.154 2.387-1.053 4.774-2.152 7.146-3.289 34.918-16.707 68.178-41.973 98.854-75.081 48.011-51.812 90.321-124.538 116.082-199.529 9.812-28.559 16.328-55.012 18.85-76.505C977.926 52.164 978.655 23.589 957.588 9.988L957.588 9.988zM894.99 146.906c-21.936 57.262-53.549 111.35-89.022 152.296-56.523 65.242-119.216 95.309-186.356 89.346-115.928-10.281-202.652 4.505-265.143 45.218-39.725 25.881-64.161 58.501-82.426 89.441L112.456 162.644c16.524-11.895 55.806-37.489 111.843-56.938 99.672-34.587 202.718-34.464 306.269 0.37 122.567 41.227 209.393 54.971 273.25 43.244 47.689-8.757 79.963-30.879 108.112-55.621C908.347 108.317 902.929 126.178 894.99 146.906L894.99 146.906z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-costrecording" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M615.997 281.332l-100.362 105.568-106.306-106.144c-12.353-12.386-32.344-12.288-44.628 0-12.386 12.417-12.909 32.457-0.592 44.826l116.821 117.264v5.881h-93.627c-17.428 0-31.586 14.141-31.586 31.671 0 17.459 14.159 31.621 31.586 31.621h93.627v63.306h-93.627c-17.428 0-31.586 14.159-31.586 31.671 0 17.527 14.159 31.603 31.586 31.603h93.627v94.104c0 17.51 14.159 31.621 31.635 31.621s31.652-14.093 31.652-31.621v-94.104h95.861c17.477 0 31.635-14.062 31.635-31.603 0-17.493-14.141-31.671-31.635-31.671h-95.861v-63.321h95.861c17.477 0 31.635-14.159 31.635-31.621 0-17.51-14.141-31.671-31.635-31.671h-95.861v-1.266l117.117-122.554c12.023-12.648 11.925-32.654-0.788-44.711-6.062-5.783-13.913-8.689-21.73-8.689-8.246 0-16.526 3.236-22.816 9.838M690.522 185.518c-17.51 0-31.749 14.209-31.749 31.749 0 17.608 14.225 31.833 31.749 31.833h232.902c17.459 0 31.719-14.225 31.719-31.833 0-17.527-14.258-31.749-31.719-31.749h-232.902zM512.974 69.011h-0.049c-0.231 0-0.329 0-0.459 0-243.923 0-442.398 198.67-442.398 442.989 0 244.45 198.325 443.005 442.544 443.005 243.99 0 442.511-198.753 442.511-443.005 0-7.64-0.197-15.358-0.608-22.898v21.157c0-17.281-14.028-31.357-31.324-31.357-17.346 0-31.309 14.077-31.309 31.357v1.741c0 209.397-170.090 379.699-379.273 379.882-208.938 0-379.387-170.73-379.387-379.882 0-209.397 170.206-379.684 379.387-379.684h11.201c17.394 0 31.603-14.175 31.603-31.719 0-17.428-14.209-31.586-31.603-31.586h-10.84z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-waitConsume" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M499.2 998.4C230.8096 998.4 12.7488 780.3136 12.8 511.9488 12.8256 243.8144 230.912 25.728 499.0208 25.6256L499.0208 25.6256 499.5072 25.6256C499.5328 25.6256 499.5584 25.6 499.584 25.6 499.584 25.6 499.584 25.6 499.584 25.6256L507.9552 25.6256C522.3424 25.6256 533.9904 37.2736 533.9904 51.6352 533.9904 65.9968 522.3424 77.6704 507.9552 77.6704L507.9552 77.6704 499.6096 77.6704 499.6096 95.104C499.584 95.104 499.5584 95.104 499.5584 95.104L499.5584 77.696C499.5584 77.696 499.5584 77.696 499.5584 77.696 259.9168 77.4912 64.896 272.3584 64.8704 511.9488 64.8448 751.5904 259.5328 946.3296 499.2 946.3296 738.688 946.3296 933.5296 751.488 933.5296 512 933.5296 511.6416 933.504 511.3088 933.504 510.9504L934.2976 510.9504 934.2976 510.4384C934.2976 496.0768 945.6384 484.4288 959.616 484.4288 973.6192 484.4288 984.9344 496.0768 984.9344 510.4384L984.9344 510.9504 984.96 510.9504 984.96 486.8096C985.3696 495.1552 985.6 503.552 985.6 512 985.6 780.2112 767.4112 998.4 499.2 998.4ZM984.96 486.7584 984.96 486.8096C984.96 486.784 984.96 486.784 984.9344 486.7584L984.96 486.7584ZM916.096 511.0528C916.096 511.0272 916.096 510.976 916.096 510.9504L932.9408 510.9504 932.9408 511.0528 916.096 511.0528ZM945.664 205.8752 694.1952 205.8752C675.2768 205.8752 659.9424 194.2528 659.9424 179.9424 659.9424 165.632 675.2768 154.0096 694.1952 154.0096L945.664 154.0096C964.608 154.0096 979.9424 165.632 979.9424 179.9424 979.9424 194.2528 964.608 205.8752 945.664 205.8752Z"  ></path>' +
    '' +
    '<path d="M482.8672 761.4976C482.8672 773.3248 492.2368 782.9504 503.7824 782.9504 515.3024 782.9504 524.672 773.3248 524.672 761.4976L524.8 761.4976 524.8 633.984 650.4448 633.984 650.4448 633.7792C661.9904 633.7792 671.3344 624.1024 671.3344 612.2752 671.3344 600.3968 661.9904 590.7968 650.4448 590.7968L524.7744 590.7968 524.7744 524.416 650.4704 524.416 650.4704 524.416 650.4704 524.2112C661.9648 524.2112 671.3088 514.6112 671.3088 502.7072 671.3088 490.8544 661.9648 481.2288 650.4704 481.2288L524.7744 481.2288 524.7744 441.7024 649.3696 316.1344 649.2416 315.9552C657.8688 308.096 658.6368 294.528 650.9824 285.6448 643.3024 276.736 630.0928 275.968 621.4656 283.8528L504.2944 402.5344 381.0304 278.144C372.3776 270.2592 359.1936 271.0784 351.5392 279.9872 343.8848 288.8448 344.6528 302.4128 353.28 310.272L353.152 310.4256 482.7648 440.6784 482.7648 481.2288 357.0688 481.2288 357.0688 481.3568C345.5744 481.3568 336.2048 490.9568 336.2048 502.8352 336.2048 514.7136 345.5744 524.3392 357.0688 524.3392L357.0688 524.4416 482.7648 524.4416 482.7648 590.7968 357.0688 590.7968 357.0688 590.8992C345.5744 590.8992 336.2048 600.576 336.2048 612.4032 336.2048 624.256 345.5744 633.8816 357.0688 633.8816L357.0688 633.984 482.7648 633.984 482.7648 761.5232 482.8672 761.5232 482.8672 761.4976M482.8672 761.4976 482.8672 761.4976Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chongzhi" viewBox="0 0 1117 1024">' +
    '' +
    '<path d="M321.828571 864.415584h-87.771428l13.298701 13.298702c45.215584 45.215584 98.41039 79.792208 159.584416 106.38961 63.833766 26.597403 130.327273 39.896104 199.480519 39.896104 69.153247 0 135.646753-13.298701 199.48052-39.896104 61.174026-26.597403 114.368831-63.833766 162.244156-109.049351 47.875325-47.875325 82.451948-101.07013 109.04935-162.244155 26.597403-63.833766 39.896104-130.327273 39.896104-199.48052 0-69.153247-13.298701-135.646753-39.896104-199.480519-26.597403-61.174026-61.174026-117.028571-109.04935-162.244156-47.875325-47.875325-101.07013-85.111688-162.244156-109.049351-63.833766-26.597403-130.327273-39.896104-199.48052-39.896104-69.153247 0-135.646753 13.298701-199.480519 39.896104-61.174026 26.597403-114.368831 63.833766-162.244156 109.049351-47.875325 47.875325-82.451948 101.07013-109.049351 162.244156-23.937662 53.194805-37.236364 111.709091-39.896104 170.223376v7.979221h58.514286v-7.979221c15.958442-239.376623 212.779221-425.558442 452.155844-425.558441 250.015584 0 452.155844 202.14026 452.155844 452.155844s-202.14026 452.155844-452.155844 452.155844c-103.72987 2.65974-202.14026-31.916883-284.592208-98.41039z" fill="#6C727A" ></path>' +
    '' +
    '<path d="M768.664935 539.927273c15.958442 0 29.257143-13.298701 29.257143-29.257143 0-15.958442-13.298701-29.257143-29.257143-29.257143h-127.667532v-15.958442s0-2.65974 2.65974-2.65974l125.007792-132.987013c10.638961-10.638961 10.638961-29.257143 0-42.555844-5.319481-5.319481-13.298701-7.979221-21.277922-7.979221s-15.958442 2.65974-21.277922 7.979221l-114.368831 122.348052-114.368831-122.348052c-5.319481-5.319481-13.298701-7.979221-21.277923-7.979221-7.979221 0-15.958442 2.65974-21.277922 7.979221-10.638961 10.638961-10.638961 29.257143 0 42.555844l125.007793 132.987013s0 2.65974 2.65974 2.65974v15.958442h-127.667533c-15.958442 0-29.257143 13.298701-29.257142 29.257143 0 15.958442 13.298701 29.257143 29.257142 29.257143h127.667533v34.576623h-127.667533c-15.958442 0-29.257143 13.298701-29.257142 29.257143 0 15.958442 13.298701 29.257143 29.257142 29.257143h127.667533v85.111688c0 15.958442 13.298701 29.257143 29.257143 29.257143s29.257143-13.298701 29.257143-29.257143V633.018182h127.667532c15.958442 0 29.257143-13.298701 29.257143-29.257143 0-15.958442-13.298701-29.257143-29.257143-29.257143h-127.667532v-34.576623h127.667532zM356.405195 667.594805c0-2.65974-2.65974-2.65974-2.65974-5.31948 0 0 0-2.65974-2.659741-2.659741l-109.04935-114.368831c-5.319481-5.319481-13.298701-7.979221-18.618182-7.979221-7.979221 0-13.298701 2.65974-18.618182 7.979221-10.638961 10.638961-10.638961 29.257143 0 39.896104l63.833766 69.153247h-242.036363c-15.958442 0-26.597403 13.298701-26.597403 26.597402s13.298701 26.597403 26.597403 26.597403h242.036363l-63.833766 69.153247c-10.638961 10.638961-10.638961 29.257143 0 39.896104 5.319481 5.319481 10.638961 7.979221 18.618182 7.979221 7.979221 0 13.298701-2.65974 18.618182-7.979221l109.04935-114.368831 2.659741-2.659741s2.65974-2.65974 2.65974-5.31948c2.65974-2.65974 2.65974-7.979221 2.65974-10.638961 0-10.638961 0-13.298701-2.65974-15.958442z" fill="#6C727A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)