# SSL Installation Guide - Adegan Global Enterprise

## 🔒 SSL Certificate Installation Options

This guide provides step-by-step instructions for installing SSL certificates on your domain **adeganglobalenterprise.com**

---

## 📋 Prerequisites

Before installing SSL, ensure you have:
- ✅ Domain name registered: adeganglobalenterprise.com
- ✅ Hosting account active
- ✅ DNS properly configured
- ✅ Access to domain registrar
- ✅ Access to hosting control panel (cPanel)

---

## 🌟 Option 1: Cloudflare SSL (Recommended - Free)

### Why Choose Cloudflare SSL?
- ✅ **Free** - No cost
- ✅ **Easy Setup** - No technical expertise needed
- ✅ **Automatic Renewal** - Never expires
- ✅ **Performance** - CDN, DDoS protection included
- ✅ **Universal SSL** - Works with any hosting

### Step-by-Step Installation:

#### 1. Create Cloudflare Account
1. Visit: https://dash.cloudflare.com/sign-up
2. Email: adeganglobal@gmail.com
3. Create strong password (minimum 12 characters)
4. Complete registration

#### 2. Add Your Domain
1. Click "Add a Site"
2. Enter domain: `adeganglobalenterprise.com`
3. Select "Free" plan
4. Click "Add Site"

#### 3. Scan DNS Records
1. Cloudflare will scan existing DNS records
2. Review and confirm all records
3. Ensure A record points to your hosting IP

#### 4. Update Nameservers
Cloudflare will provide two nameservers (example):
- `bob.ns.cloudflare.com`
- `lana.ns.cloudflare.com`

**Action Required:**
1. Login to your domain registrar
2. Find DNS/Nameservers settings
3. Replace existing nameservers with Cloudflare's
4. Save changes

**Important:** Nameserver propagation takes 24-48 hours

#### 5. Configure SSL/TLS Settings
After nameservers are active:

1. Login to Cloudflare dashboard
2. Go to **SSL/TLS** → **Overview**
3. Select encryption mode: **"Full (Strict)"**
4. Enable: **"Always Use HTTPS"**
5. Enable: **"Automatic HTTPS Rewrites"**

**SSL Mode Explanation:**
- **Off:** No encryption (NOT recommended)
- **Flexible:** Encrypts browser → Cloudflare only
- **Full:** Encrypts browser → Cloudflare → Server
- **Full (Strict):** Full encryption with certificate validation (RECOMMENDED)

#### 6. Configure Edge Certificates
1. Go to **SSL/TLS** → **Edge Certificates**
2. Enable: **"Always Use HTTPS"**
3. Enable: **"Automatic HTTPS Rewrites"**
4. Enable: **"HSTS"** (after verification)

#### 7. Verify SSL Installation
1. Visit: https://adeganglobalenterprise.com
2. Look for padlock icon in browser
3. Check certificate details:
   - Issued by: Cloudflare
   - Valid for: adeganglobalenterprise.com
   - Status: Valid

#### 8. Test SSL Configuration
Use these tools to verify:
- https://www.sslshopper.com/ssl-checker.html
- https://www.ssllabs.com/ssltest/
- https://www.wormly.com/test_ssl

---

## 🎯 Option 2: Let's Encrypt via cPanel (Free)

### When to Use This Option:
- You have direct cPanel access
- You prefer server-level SSL
- You want full control of certificates

### Step-by-Step Installation:

#### 1. Login to cPanel
1. Access your cPanel: `https://yourdomain.com/cpanel`
2. Use hosting username and password

#### 2. Navigate to SSL/TLS Status
1. In cPanel, search for "SSL/TLS Status"
2. Click to open SSL/TLS Status manager

#### 3. Run AutoSSL
1. Find your domain: `adeganglobalenterprise.com`
2. Click "Run AutoSSL"
3. Wait for certificate generation (1-2 minutes)

#### 4. Verify Installation
1. Refresh the page
2. Check status: ✅ "Valid" or "Active"
3. Certificate should show:
   - Issuer: Let's Encrypt
   - Valid for: adeganglobalenterprise.com, www.adeganglobalenterprise.com

#### 5. Force HTTPS Redirect
1. Go to **Domains** in cPanel
2. Find `adeganglobalenterprise.com`
3. Click "Force HTTPS Redirect" toggle to ON

#### 6. Test HTTPS
1. Visit: https://adeganglobalenterprise.com
2. Verify padlock icon
3. Check certificate is valid

---

## 💳 Option 3: Commercial SSL Certificate

### When to Use This Option:
- You need higher trust indicators
- You want extended validation (EV)
- You require warranty protection

### Step-by-Step Installation:

#### 1. Purchase SSL Certificate
Popular providers:
- **Comodo SSL:** $20-100/year
- **DigiCert:** $150-500/year
- **GlobalSign:** $100-300/year

#### 2. Generate CSR (Certificate Signing Request)
1. Login to cPanel
2. Go to **SSL/TLS** → **Generate CSR**
3. Fill in details:
   - Domain: adeganglobalenterprise.com
   - City: [Your city]
   - State/Province: [Your state]
   - Country: [Your country code, e.g., NG]
   - Company: Adegan Global Enterprise
   - Department: IT
   - Email: adeganglobal@gmail.com
4. Click "Generate"
5. Save CSR code

#### 3. Submit CSR to SSL Provider
1. Login to SSL provider account
2. Paste CSR code
4. Complete domain validation
   - Email verification to adeganglobal@gmail.com
   - OR DNS record validation
   - OR file upload validation

#### 4. Download SSL Certificate
After validation:
1. Download certificate files:
   - Primary certificate (.crt)
   - CA bundle (.ca-bundle)
   - Private key (if generated separately)

#### 5. Install Certificate in cPanel
1. Go to **SSL/TLS** → **Install SSL Certificate**
2. Paste certificate (.crt)
3. Paste CA bundle
4. Private key should auto-detect
5. Click "Install Certificate"

#### 6. Test Installation
1. Visit https://adeganglobalenterprise.com
2. Verify padlock icon
3. Check certificate details

---

## 🔧 SSL Configuration Settings

### Recommended SSL/TLS Settings:

#### Minimum TLS Version
```
Minimum TLS Version: 1.2
```
- TLS 1.0 and 1.1 are deprecated
- TLS 1.2 and 1.3 are secure

#### Cipher Suites
Use strong cipher suites:
- TLS_AES_256_GCM_SHA384
- TLS_CHACHA20_POLY1305_SHA256
- TLS_AES_128_GCM_SHA256

#### HSTS (HTTP Strict Transport Security)
Enable after SSL verification:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 🧪 SSL Testing and Verification

### Online SSL Testers:
1. **SSL Labs Server Test:** https://www.ssllabs.com/ssltest/
   - Comprehensive analysis
   - Security rating (A+ to F)
   - Configuration recommendations

2. **SSL Shopper:** https://www.sslshopper.com/ssl-checker.html
   - Quick verification
   - Certificate details
   - Chain validation

3. **Wormly SSL Test:** https://www.wormly.com/test_ssl
   - Configuration check
   - Protocol support
   - Cipher suite analysis

### Manual Testing:
1. **Browser Test:**
   - Visit https://adeganglobalenterprise.com
   - Check for padlock icon
   - Click padlock → "Connection is secure"
   - View certificate details

2. **Command Line Test:**
   ```bash
   openssl s_client -connect adeganglobalenterprise.com:443
   ```

3. **curl Test:**
   ```bash
   curl -I https://adeganglobalenterprise.com
   ```

---

## ⚠️ Common SSL Issues and Solutions

### Issue 1: Mixed Content Warning
**Problem:** Site loads over HTTPS but some resources load over HTTP

**Solution:**
1. Update all links to use HTTPS
2. Add to .htaccess:
   ```apache
   <IfModule mod_headers.c>
   Header set Content-Security-Policy "upgrade-insecure-requests;"
   </IfModule>
   ```

### Issue 2: Certificate Not Trusted
**Problem:** Browser shows "Not Secure" or certificate error

**Solution:**
1. Verify certificate chain is complete
2. Ensure intermediate certificates are installed
3. Check certificate expiration date

### Issue 3: SSL Handshake Failed
**Problem:** Server doesn't respond to HTTPS requests

**Solution:**
1. Check firewall allows port 443
2. Verify SSL port is open
3. Restart web server (Apache/Nginx)

### Issue 4: Domain Mismatch
**Problem:** Certificate issued for different domain

**Solution:**
1. Verify domain in CSR matches hosted domain
2. Include www and non-www versions
3. Reissue certificate if needed

---

## 📊 SSL Performance Optimization

### Enable HTTP/2
Most modern servers support HTTP/2:
- Faster page loads
- Multiplexing
- Header compression

### Enable OCSP Stapling
Improves SSL handshake speed:
- Reduces certificate validation time
- Improves page load performance

### Use CDN with SSL
Cloudflare provides:
- Global CDN
- SSL termination
- Performance optimization

---

## 🔒 Security Best Practices

### 1. Always Use HTTPS
- Redirect all HTTP to HTTPS
- Use HSTS headers
- Add to preload list

### 2. Keep SSL Updated
- Monitor expiration dates
- Set up renewal reminders
- Use auto-renewal (Let's Encrypt)

### 3. Use Strong SSL Configuration
- TLS 1.2 minimum
- Strong cipher suites
- Disable weak protocols

### 4. Regular Security Audits
- Monthly SSL checks
- Quarterly security reviews
- Annual certificate renewal

---

## 📞 Support and Resources

### SSL Support Contacts:
- **Cloudflare Support:** https://support.cloudflare.com
- **Let's Encrypt Community:** https://community.letsencrypt.org
- **Your Hosting Provider:** [Hosting support URL]

### Documentation:
- **Cloudflare SSL:** https://developers.cloudflare.com/ssl
- **Let's Encrypt:** https://letsencrypt.org/docs/
- **Mozilla SSL Config Generator:** https://ssl-config.mozilla.org/

### Tools:
- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **SSL Shopper:** https://www.sslshopper.com/
- **Mozilla Observatory:** https://observatory.mozilla.org/

---

## ✅ SSL Installation Checklist

### Cloudflare SSL:
- [ ] Create Cloudflare account
- [ ] Add domain to Cloudflare
- [ ] Update nameservers at registrar
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Configure SSL mode to "Full (Strict)"
- [ ] Enable "Always Use HTTPS"
- [ ] Test SSL installation
- [ ] Verify padlock icon

### cPanel Let's Encrypt:
- [ ] Login to cPanel
- [ ] Run AutoSSL
- [ ] Verify certificate is active
- [ ] Enable HTTPS redirect
- [ ] Test HTTPS access
- [ ] Verify certificate details

### Commercial SSL:
- [ ] Purchase SSL certificate
- [ ] Generate CSR
- [ ] Submit CSR to provider
- [ ] Complete domain validation
- [ ] Download certificate files
- [ ] Install certificate in cPanel
- [ ] Test installation
- [ ] Verify certificate details

---

## 📝 Notes

- SSL certificate installation typically takes 5-30 minutes
- DNS propagation takes 24-48 hours
- Always backup before making changes
- Keep SSL certificates secure
- Monitor expiration dates
- Test thoroughly after installation

---

**Last Updated:** January 2026  
**Document Version:** 1.0  
**For:** Adegan Global Enterprise