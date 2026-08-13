# QAsight

Web ajansları ve satış ekipleri için yapay zeka modülleri geliştiren QAsight'ın
tanıtım sitesi. Statik HTML/CSS/JS — build adımı ya da harici bağımlılık yoktur.

## Ürünler

- **Web QA AI Hizmeti** (`web-qa.html`) — bir URL girilir, 60+ kontrol çalışır ve
  müşteriye gönderilebilir, white-label bir QA raporu üretilir.
- **CRM AI Katmanı** (`crm-ai.html`) — mevcut CRM'e bağlanan, dağınık veriyi
  satış ekibinin kullanabileceği çıktılara çeviren salt-okunur zeka katmanı.

## Sayfalar

| Dosya | İçerik |
|-------|--------|
| `index.html` | Ana sayfa: hero, özellik (bento) grid, ürünler, "nasıl çalışır", iletişim |
| `web-qa.html` | Web QA AI ürün detay sayfası |
| `crm-ai.html` | CRM AI Katmanı ürün detay sayfası |
| `style.css` | Ortak tasarım sistemi (koyu, teknik tema) |

## Tasarım

Koyu "AI-native" tema; Space Grotesk + Inter + JetBrains Mono tipografisi.
Scroll ile beliren bölümler (`IntersectionObserver`), sayaç animasyonları,
marquee şeridi ve karta göre hareket eden ışıltı efekti — tümü saf JS ile.
`prefers-reduced-motion` desteklenir, kontrast ve focus durumları erişilebilirlik
için gözetilmiştir.

## Çalıştırma

Statik olduğu için doğrudan tarayıcıda açılabilir:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
