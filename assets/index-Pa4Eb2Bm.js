(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();document.querySelector("#app").innerHTML=`
<div class="wrapper">
<!--header -->
<header>
    <div class="logo">
        <img src="./images/logo.png" alt="logo">
    </div>
    <nav>
        <ul>
            <li ><a class="default" href="#"> صفحه اصلی</a></li> 
            <li><a href="#"> شرکت گلستان</a>
                <div>
                    <a href="#">معرفی شرکت</a>
                    <a href="#">تاریخچه گلستان</a>
                    <a href="#">اخبار و اطلاعیه ها</a>
                    <a href="#">مسیولیت های اجتماعی</a>
                    <a href="#">سازمان فروش</a>
                    <a href="#">سازمان توزیع</a>
                    <a href="#">برندها</a>
                </div>
            </li>
            <li><a href="#">محصولات</a>
                <div>
                    <a href="#">چای</a>
                    <a href="#">ناتس</a>
                    <a href="#">ادویه و چاشنی</a>
                    <a href="#">برنج</a>
                    <a href="#">زعفران و زرشک</a>
                    <a href="#">دمنوش</a>
                    <a href="#">حبوبات و غلات</a>
                    <a href="#">قند و شکر</a>
                    <a href="#">هاتی نودل</a>
                    <a href="#">سایر محصولات</a>
                    <a href="#">گل کیس</a>
                </div>
            </li>
            <li><a href="#">وبلاگ</a>
                <div>
                    <a href="#">مجله گلستان</a>
                    <a href="#">فرهنگ غذایی</a>
                    <a href="#">سلامت غذایی</a>
                    <a href="#">تاریخچه</a>
                    <a href="#">میزبانی و دیزاین</a>
                </div>
            </li>
            <li><a href="#">قرعه کشی</a></li>
            <li><a href="#">استخدام</a></li>
            <li><a href="#">تماس با ما</a>
                <div>
                    <a href="#">دفتر مرکزی</a>
                    <a href="#">صدای مصرف کنندگان</a>
                    <a href="#">ارتباط با مشترکین</a>
                </div>
            </li>
            <li><a href="#">EN</a></li>
        </ul>
    </nav>
</header>
<!--end header -->

<!-- main-->
<div class="main">
    <div class="right animated fadeInDown ">
        <h1>قرعه‌کشی مصرف‌کنندگان گلستان   </h1>
        <h3>قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان </h3>
        <p>هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال 1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.</p>
        <div class="more"><a href="#">اطلاعات بیشتر</a></div>
    </div>
    <div class="left animated fadeInDown">
        <img src="./images/tea-pic1.png" alt="main">
    </div>
</div>
<!-- end main-->

<!--Intro-->
<div class="IntroMain">
    <div class="Intro">
        <h1>معرفی گلستان</h1>
        <p>آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
   </p>
        <p>هدفمندی و برنامه ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان می باشد.</p>
    </div>
    <div class="products">
        <h1>محصولات گلستان</h1>
        <p>محصولات گلستان​
            نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.</p>
    </div>
    <div class="detail">

        <div class="product">
            <div class="img">
                <img src="./images/human.png" alt="details">
            </div>
            <div class="title">
                <span>سرمایه انسانی</span>
            </div>
        </div>

        <div class="product">
            <div class="img">
                <img src="./images/centers.png" alt="details">
            </div>
            <div class="title">
                <span>مراکز فروش</span>
            </div>
        </div>

        <div class="product">
            <div class="img">
                <img src="./images/product.png" alt="details">
            </div>
            <div class="title">
                <span>محصولات گلستان</span>
            </div>
        </div>

        <div class="product">
            <div class="img">
                <img src="./images/customers.png" alt="details">
            </div>
            <div class="title">
                <span>مشتریان گلستان</span>
            </div>
        </div>
    </div>
</div>
<!--end Intro-->

<!-- mainImage-->
<div class="mainImage">
    <img src="./images/image2-new-1.jpg" alt="mainImage">
    <div class="textMimage">
        <h1>برنج گلستان</h1>
        <span>معرفی محصول</span>
    </div>
</div>
<!-- end mainImage-->

<!-- rice-->
<div class="firstFoodMain">
    <div class="firstFood">
    <h1>رکن اول غذای ایرانی</h1>
    <p>مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.</p>
    
    <div class="butt1">
        <a href="#">محصولات برنج</a>
    </div>
    <div class="butt2">
        <a href="#">آشپزخانه گلستان</a>
    </div>
   </div>
</div>
<!-- end rice-->


<!-- mainImage2-->
<div class="mainImage">
    <img src="./images/image3-new.jpg" alt="mainImage">
    <div class="textMimage">
        <h1>چای گلستان</h1>
        <span>معرفی محصول</span>
    </div>
</div>
<!-- end mainImage2-->

<!-- tea-->
<div class="firstFoodMain">
    <div class="firstFood">
    <h1>سابقه ای به قدمت یک عمر</h1>
    <p>چای تنها یك نوشیدنی گرم نیست.‌ یك گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدك می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش به همراه دارد.</p>

    <p class="paragraph">برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.</p>
    
    <div class="butt1">
        <a href="#">محصولات چای</a>
    </div>
   </div>
</div>
<!-- end tea-->

<!-- mainImage3-->
<div class="mainImage">
    <img src="./images/image4-new.jpg" alt="mainImage">
    <div class="textMimage">
        <h1>پسته گلستان</h1>
        <span>معرفی محصول</span>
    </div>
</div>
<!-- end mainImage2-->

<div class="firstFoodMain">
    <div class="firstFood">
    <h1>آجیل های خوش خنده</h1>
    <p>خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
    </p><p>
        پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.</p>
    
    <div class="butt1">
        <a href="#">ناتس گلستان</a>
    </div>
   </div>
</div>

<!-- fixback -->
<div class="fixback"></div>
<!-- end fixback -->

<!-- journal -->
<div class="Journal">
    <div>
    <h1>مجله گلستان</h1>
    </div>
</div>
<!-- end journal -->

<!-- journal Object-->
<div class="journalObject">
    <div class="object">
        <div class="image">
            <a href="#">
                <img src="./images/pasta.jpg" alt="pasta">
            </a>
        </div>
        <div class="detail">
            <h1>ماکارونی با سبزیجات</h1>
            <p>ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…</p>
            <div class="button"><a href="#">ادامه مطلب</a></div>
        </div>
    </div>
    <div class="object">
        <div class="image">
            <a href="#">
                <img src="./images/soup.jpg" alt="soup">
            </a>
        </div>
        <div class="detail">
            <h1>سوپ مکزیکی</h1>
            <p>گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…</p>
            <div class="button"><a href="#">ادامه مطلب</a></div>
        </div>
    </div>
    <div class="object">
        <div class="image">
            <a href="#">
                <img src="./images/vegetables.jpg" alt="chila">
            </a>
        </div>
        <div class="detail">
            <h1>چیلاکلیه</h1>
            <p>احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست</p>
            <div class="button"><a href="#">ادامه مطلب</a></div>
        </div>
    </div>
</div>
<!-- end journal Object-->

<!-- movies-->
<div class="movies">
    <div class="movieobject">
        <div class="movie">
            <video src="videos/nodel.mp4" controls ></video>
        </div>
        <div class="detail">
            <h1>سالاد نودل</h1>
            <p>نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.</p>
            <div class="button"><a href="#">ویدیوهای بیشتر</a></div>
        </div>
    </div>
    <div class="movieobject">
        <div class="movie">
            <video src="videos/instagram.mp4" controls ></video>
        </div>
        <div class="detail">
            <h1>اینستاگرام هاتی نودل</h1>
            <p>نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.</p>
            <div class="button"><a href="#">ادامه مطلب</a></div>
        </div>
    </div>
    <div class="movieobject">
        <div class="movie">
            <video src="videos/rice.mp4" controls ></video>
        </div>
        <div class="detail">
            <h1>برنج گلستان</h1>
            <p>عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.</p>
            <div class="button"><a href="#">مشاهده محصولات</a></div>
        </div>
    </div>
</div>
<!-- end movies-->

<!-- Responsibility-->
<div class="responsibility">
    <div>
        <h3>مسئوليت های اجتماعی شركت گلستان</h3>
        <hr>
        <h1>Golestan Social Responsibility</h1>
        <h5>Mahdi Hospital</h5>
    </div>
    <div class="hospital"><img src="./images/hospital.jpg" alt="responsibility"></div>
</div>
<!-- end Responsibility-->

<!-- ressocial-->
<div class="ressocial">
    <div class="text">
        <h1>مسئوليت های اجتماعی گلستان</h1>
        <p>كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکانات شان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.</p>
        
        <div class="butt1">
            <a href="#">اطلاعات بیشتر</a>
        </div>
       </div>
</div>
<!-- end ressocial-->

<!-- social-->
<div class="social">
    <div class="elementor-fb"><a href="#" target="_blank"> </a></div>	
    <div class="elementor-in"><a href="#" target="_blank"> </a></div>
    <div class="elementor-ins"><a href="#" target="_blank"> </a></div>	
    <div class="elementor-tl"><a href="#" target="_blank"> </a></div>		
    <div class="elementor-ap"><a href="#" target="_blank"> </a></div>	
    <div class="elementor-gl"><a href="#" target="_blank"> </a></div>		


</div>
<!-- end social-->

<!-- footer -->
<footer>
    <div class="red"></div>
    <div class="middle">
        <div>
            <div class="footerimg"><img src="./images/tea.png" alt="footer"></div>
            <hr>
            <h1>چای گلستان</h1>
            <hr class="hr">
            <a href="#">چای ممتاز هندوستان</a>
            <a href="#">چای ممتاز ارل گری</a>
            <a href="#">چای سیلان عطری</a>
            <a href="#">چای ممتاز سیلان</a>
            <a href="#">چای صبحانه گلستان</a>
        </div>
        <div>
            <div class="footerimg"><img src="./images/tea bag.png" alt="footer"></div>
            <hr>
            <h1>تی بگ گلستان</h1>
            <hr class="hr">
            <a href="#">تی بگ بلک لاین</a>
            <a href="#">تی بگ ارل گری</a>
            <a href="#">دمنوش نعناع</a>
            <a href="#">دمنوش بابونه</a>
            <a href="#">دمنوش چای سبز</a>
        </div>
        <div>
            <div class="footerimg"><img src="./images/footer-icon2.png" alt="footer"></div>
            <hr>
            <h1>ادویه گلستان</h1>
            <hr class="hr">
            <a href="#">زعفران ممتاز خراسان</a>
            <a href="#">ادویه کاری</a>
            <a href="#">ادویه ماست و خیار</a>
            <a href="#">فلفل سیاه خالص</a>
            <a href="#">زردچوبه ممتاز</a>
        </div>
        <div>
            <div class="footerimg"><img src="./images/footer-icon3.png" alt="footer"></div>
            <hr>
            <h1>حبوبات گلستان</h1>
            <hr class="hr">
            <a href="#">لوبیا قرمز ممتاز</a>
            <a href="#">لوبیا چیتی گلستان</a>
            <a href="#">عدس کانادایی</a>
            <a href="#">نخود زودپز کرمانشاه</a>
            <a href="#">لوبیا سفید گلستان</a>
        </div>
    </div>
    <div class="bottom">
        <div class="copy">
            <h1>All Right Reserved Golestan Company 2022-2025</h1>
            <h3></h3>
        </div>
    </div>
</footer>
<!-- edd footer-->
</div>
`;
