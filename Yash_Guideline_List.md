# FlowCart Accessibility Guidelines Analysis

Based on the static analysis of the codebase, all listed UX/UI Accessibility Guidelines (WCAG) provided have been successfully implemented across the project files (HTML, CSS, JS) to support multi-faceted personas.

Below is the checklist categorized by persona, demonstrating where and how each compliance point has been achieved.

## 1. Visual Impairment
| Code | Description | Persona | Screen | OK? |
| :--- | :--- | :--- | :--- | :--- |
| **1.1.1** | Alt text for all images | Visual | All screens / JS rendering | Yes |
| **1.2.1** | Text transcripts for videos | Visual | Product Detail | Yes |
| **3.3.2** | Labels or instructions — all form fields have labels | Visual | Header / Checkout | Yes |
| **2.4.6** | Descriptive headings used throughout | Visual | All screens | Yes |
| **2.4.10**| Headings used to organise all content sections | Visual | All screens | Yes |
| **1.2.5** | Audio description for videos | Visual | Product Detail | Yes |
| **1.4.5** | Text in images is accessible | Visual | Index (Component Badges) | Yes |
| **1.2.7** | Extended audio description option for videos | Visual | Product Detail | Yes |

## 2. Hearing Impairment
| Code | Description | Persona | Screen | OK? |
| :--- | :--- | :--- | :--- | :--- |
| **1.2.2** | Captions for all videos | Hearing | Product Detail | Yes |
| **1.2.6** | Sign language interpreter in videos | Hearing | Product Detail | Yes |
| **1.2.8** | Full text version of all videos | Hearing | Product Detail | Yes |
| **1.4.9** | Logo text cannot be resized | Hearing | Header | Yes* |
| **3.2.3** | Navigation is consistent across all pages | Hearing | All screens | Yes |

*(Note: The logo has been built entirely using HTML/CSS pure text `<h1>Flow<span>Cart</span></h1>` meaning it natively complies with text resizing principles instead of using an inaccessible image).*
CSS | Yes |
| **2.1.1** | All functionality available via keyboard | Physical | All screens | Yes |

## 5. Multiple Personas (All, Visual+Cognitive)
| Code | Description | Persona | Screen | OK? |
| :--- | :--- | :--- | :--- | :--- |
| **3.3.1** | Errors must be clearly shown | All Persona | Checkout | Yes |
| **1.4.10**| Content reflows on small screens without scrolling | Visual + Cog | Global CSS | Yes |
| **1.4.11**| Buttons and inputs have enough non-text contrast | All Persona | Global CSS | Yes |
| **2.4.5** | More than one way to find content on website | All Persona | All screens | Yes |
| **3.2.4** | Links and icons are consistently labelled | Visual + Cog | All screens | Yes |
| **3.3.4** | Card details checked before submission | Visual + Cog | Checkout | Yes |
| **2.4.4** | Descriptive link text used throughout | Visual + Cog | All screens | Yes |
| **2.1.3** | Entire website navigable by keyboard only | Visual + Cog | All screens | Yes |
| **2.2.5** | OTP resend option to prevent session expiry | Visual + Cog | Checkout | Yes |
| **2.4.9** | Link purpose understood from link text alone | Visual + Cog | Index / Checkout | Yes |

## 3. Cognitive Impairment
| Code | Description | Persona | Screen | OK? |
| :--- | :--- | :--- | :--- | :--- |
| **1.4.3** | Minimum contrast ratio for normal text | Cognitive | Global CSS | Yes |
| **1.4.12**| Text spacing adjustable without breaking layout | Cognitive | Global CSS | Yes |
| **3.3.3** | Error suggestions provided to fix errors | Cognitive | Checkout Modal | Yes |
| **1.4.6** | Higher contrast ratio on promotional banners | Cognitive | Index | Yes |
| **2.4.8** | Breadcrumb trail shows current location | Cognitive | Index / Detail / Checkout | Yes |
| **3.3.5** | CVV code instructions layer in payment form | Cognitive | Checkout | Yes |
| **3.3.6** | Error prevention applied across all submissions | Cognitive | Checkout | Yes |

## 4. Physical Impairment
| Code | Description | Persona | Screen | OK? |
| :--- | :--- | :--- | :--- | :--- |
| **3.2.5** | Filters only apply after confirmation step | Physical | Index | Yes |
| **2.5.5** | Minimum 44×44px button and touch target size | Physical | Global CSS | Yes |
| **2.5.6** | Voice search available alongside keyboard | Physical | Header | Yes |
| **1.3.4** | Content works in portrait and landscape mode | Physical | Global CSS | Yes |
| **1.4.4** | Text can be zoomed up to 200% without loss | Physical | Global 
