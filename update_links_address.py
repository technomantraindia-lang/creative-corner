import os
import re

# Define replacement constants
YOUTUBE_URL = "https://www.youtube.com/@CreativeCornerHub_CCH"
LINKEDIN_URL = "https://www.linkedin.com/company/104359627/"
FACEBOOK_URL = "https://www.facebook.com/creativecornerhub/"
INSTAGRAM_URL = "https://www.instagram.com/creativecornerhub/?hl=en"
GOOGLE_SEARCH_URL = "https://www.google.com/search?sca_esv=c7737a8802ed2fd8&sxsrf=APpeQnvGpZVocRrNsnQIlG3BGSFVzAEyqw:1787746973419&kgmid=/g/11swr78k9t&q=Creative+Corner+Hub&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=ccd14407d08c1d58&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1"
ADDRESS_FULL = "543, Yash Arian, Near Swami Vivekanand Circle, Memnagar, Ahmedabad, Gujarat - 380052"
ADDRESS_L1 = "543, Yash Arian, Near Swami Vivekanand Circle"
ADDRESS_L2 = "Memnagar, Ahmedabad, Gujarat - 380052"

YASH_ARIAN_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.696349479153!2d72.53568607595462!3d23.037411215758835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84af972d7f8b%3A0x9d4a3674681f9a2e!2sYash%20Arian!5e0!3m2!1sen!2sin!4v1724691234567!5m2!1sen!2sin"

# Standard YouTube button replacement
YOUTUBE_BTN_HTML = f"""<a href="{YOUTUBE_URL}" class="footer-social-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>"""

def update_file(filepath):
    print(f"Processing: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update Facebook link
    content = re.sub(
        r'<a\s+href="[^"]*"\s+class="footer-social-btn"\s+aria-label="Facebook">',
        f'<a href="{FACEBOOK_URL}" class="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">',
        content
    )

    # 2. Replace Twitter with YouTube
    content = re.sub(
        r'<a\s+href="[^"]*"\s+class="footer-social-btn"\s+aria-label="Twitter">[\s\S]*?</a>',
        YOUTUBE_BTN_HTML,
        content
    )

    # 3. Update Instagram link
    content = re.sub(
        r'<a\s+href="[^"]*"\s+class="footer-social-btn"\s+aria-label="Instagram">',
        f'<a href="{INSTAGRAM_URL}" class="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">',
        content
    )

    # 4. Update LinkedIn link
    content = re.sub(
        r'<a\s+href="[^"]*"\s+class="footer-social-btn"\s+aria-label="LinkedIn">',
        f'<a href="{LINKEDIN_URL}" class="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">',
        content
    )

    # 5. Update Address in footer span: <span>Suite 404, Creative Tower, Design Plaza</span>
    # Link it to the Google Search URL
    address_link_html = f'<a href="{GOOGLE_SEARCH_URL}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.3);">{ADDRESS_FULL}</a>'
    content = re.sub(
        r'<span>Suite 404, Creative Tower, Design Plaza</span>',
        f'<span>{address_link_html}</span>',
        content
    )

    # 6. Update Telephone Number in services (replace 98765 43210 with 91574 13030)
    content = content.replace("tel:+919876543210", "tel:+919157413030")
    content = content.replace("+91 98765 43210", "+91 91574 13030")

    # 7. Special updates for contact.html
    if filepath.endswith("contact.html"):
        # Map Iframe
        content = re.sub(
            r'src="https://www\.google\.com/maps/embed\?pb=!1m18!1m12!1m3!1d3770\.798480373082!2d72\.83363031534433!3d19\.073068987087095[\s\S]*?"',
            f'src="{YASH_ARIAN_MAP_EMBED}"',
            content
        )
        # Open in Google Maps button link
        content = re.sub(
            r'href="https://maps\.google\.com/\?q=Bandra\+Kurla\+Complex,\+Mumbai"',
            f'href="{GOOGLE_SEARCH_URL}"',
            content
        )
        # Main address details in contact page:
        # <p>Suite 404, Creative Tower, Design Plaza</p>
        # <p>BKC, Mumbai, Maharashtra 400051</p>
        old_address_block = r'<p>Suite 404, Creative Tower, Design Plaza</p>\s*<p>BKC, Mumbai, Maharashtra 400051</p>'
        new_address_block = f'<p><a href="{GOOGLE_SEARCH_URL}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">{ADDRESS_L1}</a></p>\n            <p>{ADDRESS_L2}</p>'
        content = re.sub(old_address_block, new_address_block, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def walk_and_update(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                update_file(filepath)

if __name__ == "__main__":
    workspace_dir = r"c:\Users\cvsut\Downloads\creative-corner-master\creative-corner-master"
    walk_and_update(workspace_dir)
    print("All updates completed successfully!")
