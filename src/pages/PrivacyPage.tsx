import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SUPPORT_EMAIL } from "../lib/constants";

export function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-16">
        <Link to="/" className="text-sm font-semibold text-brand-deep">
          ← Ana sayfa
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">
          Gizlilik Politikası
        </h1>
        <p className="mt-2 text-sm text-ink/50">Son güncelleme: 17 Ağustos 2026</p>

        <div className="prose-kelimatik mt-8 space-y-5 text-[15px] leading-relaxed text-ink/80">
          <p>
            Kelimatik ("uygulama"), Türkçe yazım kurallarını eğlenceli bir şekilde
            öğrenmeye ve test etmeye yardımcı olmak amacıyla geliştirilmiş bir
            mobil uygulamadır. Bu Gizlilik Politikası, Kelimatik'i kullandığınızda
            hangi bilgilerin işlenebileceğini ve bu bilgilerin nasıl kullanıldığını
            açıklamaktadır.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">1. Toplanan ve İşlenen Bilgiler</h2>
          <p>
            Kelimatik'in bazı özelliklerini kullanabilmeniz için belirli bilgiler
            işlenebilir. Bu bilgiler uygulamanın temel işlevlerini sağlamak,
            kullanıcı hesabını yönetmek ve uygulama deneyimini geliştirmek amacıyla
            kullanılabilir.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Google hesabı ile giriş yapıldığında hesapla ilişkili temel bilgiler,</li>
            <li>Kullanıcı hesabına ilişkin teknik bilgiler,</li>
            <li>Uygulama içindeki ilerleme, puan ve sıralama gibi kullanım verileri,</li>
            <li>Cihaz ve uygulama kullanımına ilişkin teknik bilgiler,</li>
            <li>Reklam hizmetleri tarafından kullanılan reklam ve tanımlayıcı bilgiler.</li>
          </ul>

          <h2 className="pt-4 text-xl font-bold text-ink">2. Google ile Giriş</h2>
          <p>
            Kelimatik, kullanıcıların hesap oluşturması ve uygulamaya giriş yapması
            için Google ile giriş özelliğini kullanabilir. Google ile giriş
            yaptığınızda, giriş işlemi için gerekli olan temel hesap bilgileri
            işlenebilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">3. Supabase</h2>
          <p>
            Kelimatik, kullanıcı hesabı ve uygulama verilerinin saklanması ve
            yönetilmesi amacıyla Supabase altyapısından yararlanabilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">4. Reklamlar</h2>
          <p>
            Kelimatik, uygulama içerisinde reklam göstermek için Google Mobile Ads
            (AdMob) hizmetini kullanmaktadır. AdMob, reklamların gösterilmesi ve
            ölçümlenmesi amacıyla cihaz veya reklamla ilişkili belirli bilgileri
            işleyebilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">5. Kullanıcı İzni</h2>
          <p>
            Kelimatik, reklam ve benzeri hizmetlerde gerekli kullanıcı izinlerini
            yönetmek amacıyla Google'ın kullanıcı rızası yönetim mekanizmalarını
            kullanabilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">6. Verilerin Kullanım Amaçları</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Kullanıcı hesabının oluşturulması ve yönetilmesi,</li>
            <li>Uygulamanın temel özelliklerinin sağlanması,</li>
            <li>Puan, ilerleme ve sıralama özelliklerinin çalıştırılması,</li>
            <li>Reklamların gösterilmesi ve ölçümlenmesi,</li>
            <li>Uygulamanın güvenliğinin ve performansının sağlanması.</li>
          </ul>

          <h2 className="pt-4 text-xl font-bold text-ink">7. Üçüncü Taraf Hizmetler</h2>
          <p>
            Kelimatik'in çalışması sırasında Google ve Supabase gibi üçüncü taraf
            hizmet sağlayıcılarının altyapılarından yararlanılabilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">8. Veri Güvenliği</h2>
          <p>
            Kullanıcı bilgilerinin yetkisiz erişime karşı korunması için uygun
            teknik ve organizasyonel önlemler alınmaya çalışılmaktadır. İnternet
            üzerinden hiçbir veri aktarımının tamamen güvenli olduğu garanti
            edilemez.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">9. Çocukların Gizliliği</h2>
          <p>
            Kelimatik, çocuklara yönelik özel olarak tasarlanmış bir hizmet
            değildir. Çocuklardan bilerek ve doğrudan kişisel veri toplamayı
            amaçlamıyoruz.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">10. Verilerin Saklanması</h2>
          <p>
            Kullanıcı verileri, uygulamanın ilgili özelliklerini sağlayabilmek için
            gerekli olduğu süre boyunca veya geçerli yasal yükümlülükler
            doğrultusunda saklanabilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">11. Haklarınız</h2>
          <p>
            Geçerli mevzuat kapsamında kişisel verilerinizle ilgili erişim,
            düzeltme, silme veya diğer yasal haklarınız bulunabilir.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">12. Değişiklikler</h2>
          <p>
            Bu Gizlilik Politikası gerektiğinde güncellenebilir. Güncellemeler bu
            sayfada yayınlanır.
          </p>

          <h2 className="pt-4 text-xl font-bold text-ink">13. İletişim</h2>
          <p>
            Sorularınız için:{" "}
            <a className="font-semibold text-brand-deep" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
