# FlowCart Accessibility Guidelines Documentation

This document outlines the accessibility guidelines implemented across the FlowCart e-commerce website and provides instructions on how to manually cross-verify each feature.

## 1. Perceivable Guidelines

### 1.1 WCAG 1.1.1: Non-text Content (Alt Text)
*   **Implementation:** All images (product images, banners, and icons) have meaningful `alt` text. Decorative icons are hidden from screen readers using `aria-hidden="true"`.
*   **How to Verify:** Right-click on any product image or banner and select "Inspect". Verify that the `<img>` tag has a descriptive `alt=""` attribute (e.g., `alt="White athletic running shoes with breathable mesh"`).

### 1.2 WCAG 1.2.2: Captions (Prerecorded)
*   **Implementation:** The product video on the `product-detail.html` page includes a `.vtt` captions track file allowing users who are deaf or hard of hearing to read along.
*   **How to Verify:** Go to the Product Details page where the video is located. Click the "CC" (Closed Captions) button on the HTML5 video player and verify that English captions appear during playback.

### 1.3 WCAG 1.2.3 / 1.2.5: Audio Description or Media Alternative
*   **Implementation:** The product video includes a toggle for "Audio Description". When active, a visual overlay describes the visual actions happening in the video (e.g., "A detailed close-up of the rugged hiking boots..."). A full interactive transcript text is also provided below the video.
*   **How to Verify:** Click the "Audio Description: OFF" button below the video player. Validate that it toggles ON and that a text description block overlays at the bottom of the video. Additionally, click the "Read full transcript" dropdown to see the timestamps and dialogue.

### 1.4 WCAG 1.2.6: Sign Language (Prerecorded)
*   **Implementation:** A dedicated link option "Watch with Sign Language Interpreter" is available in the video accessibility menu.
*   **How to Verify:** Look immediately below the video on the Product Detail page to find and verify the presence of the Sign Language option.

## 2. Operable Guidelines

### 2.1 WCAG 2.1.1: Keyboard Accessible
*   **Implementation:** All interactive elements (buttons, links, form inputs) can be accessed using only the keyboard. A "Skip to main content" link is implemented at the top of the body for fast navigation.
*   **How to Verify:** Load any page and press the `Tab` key to navigate. Verify that you can reach buttons, links, and form fields without needing a mouse.

### 2.2 WCAG 2.4.7: Focus Visible
*   **Implementation:** Focus indicators (such as the distinct red box outline) are visible on all interactive elements when navigating via the keyboard.
*   **How to Verify:** Use the `Tab` key to navigate the page. Watch the screen to ensure every element you step onto receives a clear, high-contrast visual outline.

### 2.3 WCAG 2.5.6: Concurrent Input Mechanisms (Voice Search)
*   **Implementation:** A voice search button is present inside the search bar, allowing users to input text via voice dictation seamlessly alongside traditional keyboard typing.
*   **How to Verify:** Click the microphone icon in the search bar. Speak a phrase and verify that the spoken phrase is transcribed directly into the search input box.

### 2.4 WCAG 2.4.8: Location (Breadcrumbs)
*   **Implementation:** Breadcrumb trails are provided to show the user their current location within the site hierarchy (e.g., Home > Men's Shoes).
*   **How to Verify:** Navigate to a specific category or product page and look below the main navigation bar. Verify you can follow the trail backwards to the Home page.

## 3. Understandable Guidelines

### 3.1 WCAG 3.3.2: Labels or Instructions
*   **Implementation:** Visual labels or invisible ARIA labels (`aria-label`) are provided for inputs. The Search input has an adjoining `<label class="sr-only">`.
*   **How to Verify:** Inspect the top Search bar. Confirm that a `<label>` element exists and is linked properly via the `for="search-input"` attribute, even if visually hidden.

### 3.2 WCAG 3.2.5: Change on Request (Predictability)
*   **Implementation:** Applying filters or sorting options (like Price, New Arrivals) does not automatically refresh or jump the page content. Context updates only occur after the user explicitly clicks the "Apply Filters" confirmation button.
*   **How to Verify:** Go to the Men's Shoes category. Click the "Price" sort button. Verify that the products do *not* instantly reorder. Click the "Apply Filters" button and verify that the products *then* re-render according to the selected sort.

## 4. Robust Guidelines

### 4.1 WCAG 4.1.2: Name, Role, Value
*   **Implementation:** Custom interactive widgets (like category pills, color selectors, and tabs) use appropriate ARIA roles (`role="tab"`, `role="radiogroup"`) and dynamic states (`aria-selected`, `aria-checked`, `aria-pressed`).
*   **How to Verify:** Inspect the "Size (EU)" selector on the Product Details page. Verify that it contains `role="radiogroup"` and that the active size button dynamically switches to `aria-checked="true"` when clicked.

### 4.2 WCAG 4.1.3: Status Messages (Live Regions)
*   **Implementation:** When items are added to the cart, screen readers are notified of the updated cart total via a hidden `aria-live="polite"` element without moving user focus.
*   **How to Verify:** Locate the cart icon's HTML and find the `<span class="sr-only" aria-live="polite" id="cart-live-count">`. Add an item to the cart and verify in the HTML inspector that the text inside this span dynamically updates to reflect the new number of items.

## 5. Assistive Technology Integrations

### 5.1 Native Text-To-Speech (Tab Navigation Output)
*   **Implementation:** A custom Web Speech API script was written to detect the active focused element and read its content aloud when navigating with the `Tab` key.
*   **How to Verify:** Unmute your device's volume. Press the `Tab` key to move through the web interface. Verify that an automated voice reads out the label or text of the element currently enclosed in the focus outline.
