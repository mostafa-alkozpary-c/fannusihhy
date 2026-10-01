# دليل تهيئة إعلانات جوجل (Google Ads) والـ SEO لموقع "فني صحي الكويت"

تم تجهيز هذا الموقع ليكون صفحة هبوط ذات معدل تحويل مرتفع جداً (High Conversion Landing Page) وحاصلة على أعلى نقاط جودة (Quality Score) في **إعلانات جوجل (Google Ads)** وتصدر نتائج البحث المجانية (**SEO**) بدولة الكويت.

---

## 1. ربط إعلانات جوجل (Google Ads Setup)

داخل ملف [index.html](file:///d:/شغلييي/fannysihhy/index.html):

### أ. كود وسم جوجل (Google Tag / gtag.js)
في السطر 56 تقريباً:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-CONVERSION_ID'); // استبدل AW-CONVERSION_ID بمعرف حسابك في إعلانات جوجل
</script>
```

### ب. تتبع تحويلات الاتصال والواتساب (Conversion Actions)
في حساب إعلانات جوجل، قم بإنشاء إجرائي تحويل (Conversion Actions):
1. **اتصال عبر الجوال / الموقع (Click-to-Call)**.
2. **محادثة واتساب أو إرسال نموذج (WhatsApp / Lead Form)**.

ثم في ملف [assets/js/main.js](file:///d:/شغلييي/fannysihhy/assets/js/main.js):
- استبدل `AW-CONVERSION_ID/CALL_LABEL` بمعرف وملصق التحويل للاتصال.
- استبدل `AW-CONVERSION_ID/WHATSAPP_LABEL` بملصق تحويل الواتساب.

---

## 2. تحسين محركات البحث المحلي (Local SEO Kuwait)

1. **Google Search Console**:
   - ضع كود التحقق في وسم الميتا المخصص:
     ```html
     <meta name="google-site-verification" content="كود_التحقق_الخاص_بك" />
     ```
2. **رابط الموقع الأساسي (Canonical URL)**:
   - قم بتغيير `https://example.com/` إلى الدومين الفعلي لموقعك في كل من:
     - `index.html` (وسوم canonical و Open Graph و Schema.org).
     - `robots.txt` و `sitemap.xml`.
3. **البيانات المنظمة (Schema JSON-LD)**:
   - تم تضمين سكيما `Plumber` + `HomeAndConstructionBusiness` + `FAQPage` + `BreadcrumbList` بكافة محافظات الكويت ومجهزة بالكامل للظهور في النتائج المنسقة (Rich Snippets).

---

## 3. الالتزام بالمعايير والسياسات
- ✅ **رقم العميل**: 55005457 مدمج في كافة أزرار الاتصال وروابط الواتساب.
- ✅ **خالٍ تماماً من أي أسعار رقمية** تجنباً للمخالفات وحسب الطلب.
- ✅ **خالٍ من أي مواعيد أو جداول زمنية محددة**.
- ✅ **تأكيد قوي ومستمر على**: سرعة الوصول، التسليم في الموعد، والأسعار المناسبة والتنافسية.
- ✅ **سياسة الخصوصية والشروط**: مدمجة عبر نوافذ منبثقة لمنع تعليق أو رفض الإعلانات من جوجل.
