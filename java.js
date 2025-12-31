function toggleMenu() {
      const menu = document.getElementById('dropdownMenu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

// ======================================================================================
    // إغلاق القائمة إذا تم الضغط خارجها
      document.addEventListener('click', function(event) {
      const menu = document.getElementById('dropdownMenu');
      const button = document.querySelector('.menu-button');
      if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = 'none';
      }
    });

    function updateDotColor() {
  const ids = ["coloredDot", "coloredDot2"]; // المعرّفات المطلوبة

  // الوقت الحالي في توقيت القاهرة
  const now = new Date();
  const options = { timeZone: "Africa/Cairo" };
  const cairoTime = new Date(now.toLocaleString("en-US", options));

  const hour = cairoTime.getHours();
  const minutes = cairoTime.getMinutes();
  const seconds = cairoTime.getSeconds();

  // نحسب الوقت الحالي بالثواني من بداية اليوم
  const totalSeconds = hour * 3600 + minutes * 60 + seconds;

  // 👇 تحكم هنا في وقت البداية والنهاية (ساعة + دقيقة + ثانية)
  const startHour = 10, startMinute = 0, startSecond = 0;   // 10:30:00 صباحاً
  const endHour   = 22, endMinute   = 0, endSecond   = 0;   // 04:12:00 مساءً

  const startSeconds = (startHour * 3600) + (startMinute * 60) + startSecond;
  const endSeconds   = (endHour   * 3600) + (endMinute   * 60) + endSecond;

  // الشرط أدق بالثانية
  const color = (totalSeconds >= startSeconds && totalSeconds < endSeconds) ? "#00b800" : "#ccc";

  // تطبيق اللون على العناصر
  ids.forEach(id => {
    const dot = document.getElementById(id);
    if (dot) dot.style.color = color;
  });
}

// تشغيل عند تحميل الصفحة
updateDotColor();

// تحديث كل ثانية
setInterval(updateDotColor, 1000);
// ======================================================================================
// وظيفة الصعود لأعلى الصفحة باستخدام الخاصية الأصلية للمتصفح (Smooth)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // صعود ناعم، احترافي، وخفيف جداً على المعالج
    });
}
// ======================================================================================

 
document.addEventListener("DOMContentLoaded", function () {

    /* تحقق إذا كانت الصفحة الرئيسية أو صفحة الخدمات */
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/p/magofinci-services.html" ||
        window.location.pathname === "/p/business-fair.html" ||
        window.location.pathname === "/p/lessons-articles.html"
    ) {

        /* إعدادات عامة (ديسكتوب + موبايل) */
        var posts = document.querySelectorAll(".Posts");
        posts.forEach(function (post) {
            post.style.margin = "0px 23px 20px 10px";
        });

        var maxWidElements = document.querySelectorAll(".MaxWid");
        maxWidElements.forEach(function (el) {
            el.style.maxWidth = "950px";
        });

        var mains = document.querySelectorAll("main");
        mains.forEach(function (mainEl) {
            mainEl.style.padding = "0";
        });

        var asides = document.querySelectorAll("aside");
        asides.forEach(function (asideEl) {
            asideEl.style.display = "none";
        });

        /* إعدادات خاصة بالموبايل */
        if (window.matchMedia("(max-width: 768px)").matches) {

            posts.forEach(function (post) {
                post.style.margin = "0 10px 15px 10px";
            });

            maxWidElements.forEach(function (el) {
                el.style.maxWidth = "100%";
            });

            mains.forEach(function (mainEl) {
                mainEl.style.padding = "0 8px";
            });

        }
    }
});
 // ======================================================================================




















