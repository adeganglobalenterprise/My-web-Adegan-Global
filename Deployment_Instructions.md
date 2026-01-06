# Adegan Global Enterprise - Deployment Instructions

## 🚀 Website Deployment Guide

This document provides step-by-step instructions for deploying the Adegan Global Enterprise website to your hosting server.

---

## 📦 Files to Upload

### Essential Website Files:
```
adeganglobalenterprise.com/
├── index.html              (Main homepage)
├── sitemap.xml             (SEO sitemap)
├── robots.txt              (Search engine directives)
├── manifest.json           (PWA configuration)
├── css/
│   └── styles.css          (Styling)
├── js/
│   └── main.js             (Interactivity)
├── assets/
│   └── 279c8cd4e9727b46d248597f9c7f4683_0.jpeg (Logo/Profile image)
└── docs/
    ├── Account_Credentials_and_Setup_Guide.md
    ├── SSL_Installation_Guide.md
    └── Deployment_Instructions.md (this file)
```

---

## 📤 Step-by-Step Deployment

### Step 1: Prepare Your Files

1. **Download all website files** from the development environment
2. **Organize files** in the correct directory structure
3. **Verify file integrity** - ensure no files are corrupted
4. **Backup existing website** if one exists

### Step 2: Access Your Hosting Control Panel

#### Option A: cPanel Access
1. Go to: `https://adeganglobalenterprise.com/cpanel`
2. Enter hosting username and password
3. Navigate to **File Manager**

#### Option B: FTP Access
1. Use FTP client (FileZilla, WinSCP, etc.)
2. Connect to server:
   - Host: your hosting IP or domain
   - Username: hosting username
   - Password: hosting password
   - Port: 21 (or as specified)

#### Option C: SSH Access
1. Connect via SSH:
   ```bash
   ssh username@adeganglobalenterprise.com
   ```
2. Navigate to public directory:
   ```bash
   cd public_html/
   ```

### Step 3: Upload Files

#### Using cPanel File Manager:
1. Open **File Manager**
2. Navigate to `public_html/`
3. Upload files:
   - Click "Upload" button
   - Select files from your computer
   - OR drag and drop files
4. Create folders:
   - Create `css/` folder
   - Create `js/` folder
   - Create `assets/` folder
5. Upload files to respective folders

#### Using FTP:
1. Connect to server
2. Navigate to `public_html/`
3. Upload all files maintaining folder structure
4. Verify upload completion

#### Using SSH:
1. Upload files using SCP or SFTP
2. Example SCP command:
   ```bash
   scp -r local_folder/* username@adeganglobalenterprise.com:public_html/
   ```

### Step 4: Set File Permissions

#### Correct File Permissions:
- HTML files: 644 (rw-r--r--)
- CSS files: 644 (rw-r--r--)
- JavaScript files: 644 (rw-r--r--)
- Images: 644 (rw-r--r--)
- Folders: 755 (rwxr-xr-x)

#### Set Permissions via cPanel:
1. Right-click file/folder
2. Select "Change Permissions"
3. Set appropriate permission code
4. Click "Change Permissions"

#### Set Permissions via SSH:
```bash
chmod 644 *.html *.css *.js
chmod 755 css js assets
chmod 644 css/* js/* assets/*
```

### Step 5: Verify Deployment

#### Basic Verification:
1. **Access website:** https://adeganglobalenterprise.com
2. **Check homepage loads** correctly
3. **Verify styling** is applied
4. **Test navigation** links work
5. **Check images** display properly
6. **Test mobile responsiveness**

#### Detailed Testing Checklist:
- [ ] Homepage loads without errors
- [ ] All sections display correctly
- [ ] Navigation menu works
- [ ] Service cards display properly
- [ ] About section is visible
- [ ] Galaxy News section works
- [ ] Licenses section displays
- [ ] Contact information is correct
- [ ] Weather widget loads
- [ ] News widgets load
- [ ] Scroll animations work
- [ ] Mobile view is responsive
- [ ] All links are functional
- [ ] Images load correctly
- [ ] Footer displays properly

### Step 6: Configure SSL (if not already done)

Follow the **SSL_Installation_Guide.md** for detailed SSL setup instructions.

#### Quick SSL Check:
1. Visit: https://adeganglobalenterprise.com
2. Look for padlock icon
3. Click padlock → verify certificate
4. Ensure "Connection is secure"

### Step 7: Setup Google Search Console

#### Add Property:
1. Go to: https://search.google.com/search-console
2. Login with adeganglobal@gmail.com
3. Click "Add Property"
4. Select "URL prefix"
5. Enter: https://adeganglobalenterprise.com/
6. Click "Continue"

#### Verify Ownership:
1. Choose "HTML meta tag" method
2. Copy verification code
3. Add to index.html line 24:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE">
   ```
4. Upload updated index.html
5. Click "Verify" in Search Console

#### Submit Sitemap:
1. In Search Console, go to **Sitemaps**
2. Enter: sitemap.xml
3. Click "Submit"
4. Verify sitemap status

### Step 8: Test SEO and Performance

#### SEO Testing:
1. **Meta Tags:** View page source → verify meta tags
2. **Structured Data:** Test at https://search.google.com/test/rich-results
3. **Mobile-Friendly:** Test at https://search.google.com/test/mobile-friendly
4. **Page Speed:** Test at https://pagespeed.web.dev

#### Performance Testing:
1. **Load Time:** Should be under 3 seconds
2. **Mobile Score:** Aim for 90+ on PageSpeed
3. **Desktop Score:** Aim for 90+ on PageSpeed
4. **Lighthouse Score:** Run Chrome DevTools audit

---

## 🌐 Cloudflare Configuration (Optional but Recommended)

### If Using Cloudflare for DNS and SSL:

#### 1. Update Nameservers
Already completed during SSL setup

#### 2. Configure Page Rules (Optional)
1. Go to Cloudflare dashboard
2. Add page rules:
   - Always use HTTPS
   - Cache static assets
   - Redirect www to non-www (or vice versa)

#### 3. Enable Caching
1. Go to **Caching** → **Configuration**
2. Set caching level: **Standard**
3. Enable **Browser Cache TTL**

#### 4. Configure Security
1. Go to **Security** → **Settings**
2. Set firewall level: **Medium**
3. Enable **Bot Fight Mode**

---

## 🔧 Post-Deployment Configuration

### Update Google Search Console Verification:
1. Get verification code from Search Console
2. Edit index.html line 24
3. Replace: `YOUR_VERIFICATION_CODE_HERE`
4. Upload updated file
5. Click "Verify"

### Test Weather Widget:
- Widget should automatically load Lagos weather
- Updates every 10 minutes
- Displays temperature and conditions

### Test News Widgets:
- CNN and BBC news widgets should load
- Display latest headlines
- Scrolling functionality works

### Test Responsive Design:
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different devices:
   - Mobile (iPhone SE, 12, 13)
   - Tablet (iPad)
   - Desktop (1920x1080)
4. Verify layout adjusts correctly

---

## 📱 PWA Testing (Progressive Web App)

### Test PWA Installation:
1. Open website in Chrome
2. Click address bar → "Install" icon
3. Or use Chrome DevTools → Application → Manifest
4. Verify manifest.json loads correctly
5. Test "Add to Home Screen" on mobile

### PWA Checklist:
- [ ] Manifest file loads
- [ ] Icons display correctly
- [ ] Theme color matches
- [ ] App name is correct
- [ ] Install prompt appears
- [ ] App launches as standalone

---

## 🔍 Troubleshooting Common Issues

### Issue 1: Website Not Loading
**Possible Causes:**
- DNS propagation not complete
- Wrong file uploaded
- Server configuration error

**Solutions:**
1. Wait 24-48 hours for DNS propagation
2. Verify files in correct location
3. Check server error logs
4. Contact hosting support

### Issue 2: Styles Not Applied
**Possible Causes:**
- CSS file path incorrect
- CSS file not uploaded
- File permissions wrong

**Solutions:**
1. Verify CSS file location: `css/styles.css`
2. Check file path in index.html
3. Verify file is uploaded
4. Set correct permissions (644)

### Issue 3: JavaScript Not Working
**Possible Causes:**
- JS file path incorrect
- JavaScript errors
- Browser blocking scripts

**Solutions:**
1. Check browser console (F12)
2. Verify JS file location: `js/main.js`
3. Check for syntax errors
4. Clear browser cache

### Issue 4: Images Not Loading
**Possible Causes:**
- Image file path incorrect
- Image not uploaded
- Wrong file format

**Solutions:**
1. Verify image file location
2. Check image path in HTML
3. Ensure image is uploaded
4. Verify file format (JPEG, PNG)

### Issue 5: SSL Certificate Error
**Possible Causes:**
- SSL not installed
- Mixed content warning
- Certificate expired

**Solutions:**
1. Follow SSL Installation Guide
2. Update all links to HTTPS
3. Check certificate expiration
4. Clear browser cache

---

## 📊 Monitoring and Maintenance

### Weekly Tasks:
- [ ] Check website uptime
- [ ] Monitor Google Search Console
- [ ] Review analytics data
- [ ] Check for broken links

### Monthly Tasks:
- [ ] Update website content
- [ ] Review security settings
- [ ] Backup website files
- [ ] Check SSL certificate expiration

### Quarterly Tasks:
- [ ] Update passwords
- [ ] Review SEO performance
- [ ] Security audit
- [ ] Performance optimization

---

## 🎯 Success Metrics

### Key Performance Indicators:
- **Load Time:** < 3 seconds
- **Mobile Score:** > 90 (PageSpeed)
- **Desktop Score:** > 90 (PageSpeed)
- **SSL Status:** Valid and active
- **Search Console:** Verified and indexed
- **Responsive Design:** Works on all devices

---

## 📞 Support Contacts

### Technical Support:
- **Hosting Provider:** [Your hosting support URL]
- **Cloudflare Support:** https://support.cloudflare.com
- **Google Search Console:** https://support.google.com/webmasters

### Documentation:
- **SSL Guide:** docs/SSL_Installation_Guide.md
- **Credentials Guide:** docs/Account_Credentials_and_Setup_Guide.md
- **Deployment Guide:** docs/Deployment_Instructions.md

---

## ✅ Final Deployment Checklist

### Pre-Deployment:
- [ ] All files downloaded and organized
- [ ] Backup existing website
- [ ] Verify file integrity
- [ ] Prepare login credentials

### During Deployment:
- [ ] Files uploaded to correct location
- [ ] File permissions set correctly
- [ ] Directory structure maintained
- [ ] All files verified uploaded

### Post-Deployment:
- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Navigation works
- [ ] Images load
- [ ] SSL certificate active
- [ ] HTTPS redirect working
- [ ] Mobile responsive
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Performance tested
- [ ] SEO optimized
- [ ] PWA functional

---

## 📝 Notes

- Allow 24-48 hours for DNS propagation after changing nameservers
- Clear browser cache after deployment to see changes
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Monitor website performance in first week after deployment
- Keep backups of all configuration files
- Document any custom configurations

---

**Last Updated:** January 2026  
**Document Version:** 1.0  
**For:** Adegan Global Enterprise  
**Website:** https://adeganglobalenterprise.com