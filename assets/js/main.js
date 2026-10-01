/**
 * فني صحي الكويت - سكربت التفاعل والتتبع لإعلانات جوجل والـ SEO
 * الهاتف: 55005457
 */

document.addEventListener('DOMContentLoaded', () => {
  initGoogleAdsTracking();
  initFaqAccordion();
  initInquiryForm();
  initModals();
  initMobileMenu();
});

/**
 * دمج وتتبع تحويلات إعلانات جوجل (Google Ads Conversion Tracking)
 * يقوم برصد أي ضغطة على زر اتصال أو واتساب وإرسالها لجوجل
 */
function initGoogleAdsTracking() {
  // تتبع جميع روابط الاتصال الهاتفي (Click-to-Call Conversion)
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
      // إرسال الحدث إلى Google Tag إذا كان معرفاً
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/CALL_LABEL',
          'event_category': 'Engagement',
          'event_label': 'Phone Call 55005457'
        });
        gtag('event', 'generate_lead', {
          'lead_type': 'phone_call',
          'phone_number': '55005457'
        });
      }
      console.log('Google Ads Conversion: Phone Call Click Tracked (55005457)');
    });
  });

  // تتبع جميع روابط محادثات الواتساب (WhatsApp Conversion)
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/WHATSAPP_LABEL',
          'event_category': 'Engagement',
          'event_label': 'WhatsApp Chat 55005457'
        });
        gtag('event', 'generate_lead', {
          'lead_type': 'whatsapp_chat'
        });
      }
      console.log('Google Ads Conversion: WhatsApp Click Tracked (55005457)');
    });
  });
}

/**
 * الأسئلة الشائعة (FAQ Accordion)
 */
function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      const isOpen = currentItem.classList.contains('active');

      // إغلاق أي عنصر مفتوح آخر
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
      });

      // فتح أو إغلاق العنصر الحالي
      if (!isOpen) {
        currentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * معالجة نموذج الطلب السريع والتحويل التلقائي للواتساب مع تتبع التحويل
 */
function initInquiryForm() {
  const form = document.getElementById('quickOrderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName')?.value.trim() || 'عميل محترم';
    const phone = document.getElementById('userPhone')?.value.trim() || '';
    const area = document.getElementById('userArea')?.value || 'غير محدد';
    const service = document.getElementById('userService')?.value || 'طلب عام';
    const note = document.getElementById('userNote')?.value.trim() || 'يرجى التواصل في أقرب وقت';

    // صياغة رسالة الواتساب المهنية
    const message = `مرحباً، أود الاستفسار عن خدمة فني صحي:\n` +
                    `👤 الاسم: ${name}\n` +
                    `📞 رقم الهاتف: ${phone}\n` +
                    `📍 المنطقة/المحافظة: ${area}\n` +
                    `🔧 نوع الخدمة المطلوبة: ${service}\n` +
                    `📝 تفاصيل إضافية: ${note}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/96555005457?text=${encodedMessage}`;

    // إرسال حدث التحويل إلى جوجل
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/FORM_SUBMIT_LABEL',
        'event_category': 'Form',
        'event_label': 'Quick Order Submitted'
      });
      gtag('event', 'lead_form_submitted', {
        'service_type': service,
        'customer_area': area
      });
    }

    // فتح رابط الواتساب
    window.open(whatsappUrl, '_blank');
  });
}

/**
 * نوافذ الشروط وسياسة الخصوصية للامتثال لمتطلبات إعلانات جوجل
 */
function initModals() {
  const openButtons = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('.modal-close, [data-modal-close]');
  const overlays = document.querySelectorAll('.modal-overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => {
        if (overlay.classList.contains('active')) {
          closeModal(overlay);
        }
      });
    }
  });
}

/**
 * قائمة الجوال المتجاوبة
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // إغلاق القائمة عند النقر على أي رابط
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // إغلاق القائمة عند النقر في أي مكان خارجها
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // إغلاق القائمة بمفتاح Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
