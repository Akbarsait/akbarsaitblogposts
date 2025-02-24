---
title: Installing and Automating Lets Encrypt Certificates on Windows
date: 2024-08-31T00:21:00.000
tags: ["utilities", "automation"]
permalink: /blog/2024/08/31/installing-and-automating-letsencrypt-certificates-on-windows/
---
After migrating my blog to [11ty last year](/blog/2023/12/09/blog-poweredby-11ty/), I no longer had to worry about managing SSL certificates, as Netlify automatically handles them via Let's Encrypt. However, I still manage other sites where SSL certificate renewal is a manual process—especially for scenarios like getcfmljobs.com, which is hosted on a Windows server and requires annual SSL certificate renewal, involving manual authentication and installation.

Let's Encrypt solves this issue by providing free, trusted SSL certificates with 90-day validity. Additionally, it offers options to automate the renewal process, depending on your operating system or hosting platform. Here, I’ll walk you through the simple steps to set up Let's Encrypt on a Windows Server for sites hosted on IIS.

1. Install [Win-Acme](https://www.win-acme.com/) on your hosting server by downloading it from Win-Acme. Extract the files and move them to the C drive. Run "wacs.exe" to start the installation process.

2. Select "N" to use the default setting. It will scan and list the websites configured in IIS.
```yaml
 N: Create certificate (default settings)
 M: Create certificate (full options)
 R: Run renewals (0 currently due)
 A: Manage renewals (0 total)
 O: More options...
 Q: Quit
```

3. Use the identifiers to select the site where you want to install. I chose option 7.
```yaml
 Please select which website(s) should be scanned for host names. You may
 input one or more site identifiers (comma-separated) to filter by those
 sites, or alternatively leave the input empty to scan *all* websites.

 3: sitename.com (2 bindings)
 7: www.getcfmljobs.com (2 bindings)
 9: www.sitename2.com (2 bindings)

 Site identifier(s) or <Enter> to choose all: 7
```

4. Select the bindings you want to include; I chose option A to create both bindings. Then, provide your email to receive notifications about any errors or abuse.
```yaml
  1: getcfmljobs.com (Site 7)
  2: www.getcfmljobs.com (Site 7)

  P: Pick bindings based on a search pattern
  A: Pick *all* bindings

 Binding identifiers(s) or menu option: A
```

This will generate and install the certificate, then create a Windows scheduled task to automate the renewal process.
```yaml
 Plugin IIS generated source getcfmljobs.com with 2 identifiers
 Plugin Single created 1 order
 [getcfmljobs.com] Authorizing...
 [getcfmljobs.com] Authorizing using http-01 validation (SelfHosting)
 [getcfmljobs.com] Authorization result: valid
 [www.getcfmljobs.com] Authorizing...
 [www.getcfmljobs.com] Authorizing using http-01 validation (SelfHosting)
 [www.getcfmljobs.com] Authorization result: valid
 Downloading certificate [IIS] www.getcfmljobs.com, (any host)
 Store with CertificateStore...
 Installing certificate in the certificate store
 Adding certificate [IIS] www.getcfmljobs.com, (any host) @ 2024/9/1 in store WebHosting
 Adding certificate CN=R10, O=Let's Encrypt, C=US in store CA
 Installing with IIS...
 Updating existing https binding www.getcfmljobs.com:443 (flags: 1)
 Updating existing https binding getcfmljobs.com:443 (flags: 0)
 Committing 2 https binding changes to IIS while updating site 7
 Adding Task Scheduler entry with the following settings
 - Name win-acme renew (acme-v02.api.letsencrypt.org)
 - Path C:\win-acme
 - Command wacs.exe --renew --baseuri "https://acme-v02.api.letsencrypt.org/"
 - Start at 09:00:00
 - Random delay 04:00:00
 - Time limit 02:00:00
 Adding renewal for [IIS] www.getcfmljobs.com, (any host)
 Next renewal due after 2024/10/26
 Certificate [IIS] www.getcfmljobs.com, (any host) created
```

The scheduled task will include a command that runs daily to check the certificate's expiration and renew it automatically.
```yaml
C:\win-acme\wacs.exe --renew --baseuri "https://acme-v02.api.letsencrypt.org/"
```

**Related Link:**
- [Let's Encrypt](https://letsencrypt.org/)  
- [Win-Acme](https://www.win-acme.com/)

Feel free to reach out with any questions or comments. Happy automating!