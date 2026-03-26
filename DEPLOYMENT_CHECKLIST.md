# Frank's Lab Website - Deployment Checklist

## Before You Start

- [ ] Have GitHub account ready
- [ ] Prepared project information (name, URL, brief, status)
- [ ] Prepared lab information (established year, areas)
- [ ] Know frankzh.top DNS provider

## Deployment Steps

### GitHub Repository
- [ ] Created repository: `YOUR_USERNAME.github.io`
- [ ] Repository is public
- [ ] All files uploaded

### GitHub Pages Configuration
- [ ] Enabled GitHub Pages in Settings
- [ ] Selected main branch, / (root) folder
- [ ] Configured custom domain: frankzh.top
- [ ] Verified GitHub Pages deployment

### DNS Configuration
- [ ] Added CNAME record: www → YOUR_USERNAME.github.io
- [ ] Added A record: @ → 185.199.108.153
- [ ] Waited for DNS propagation (5-60 min)

### Content Customization
- [ ] Updated `_data/projects.yml` with real projects
- [ ] Updated `_data/lab-info.yml` with lab info
- [ ] Reviewed language packs in `_locales/`
- [ ] Tested project links

### Testing
- [ ] Site loads at https://frankzh.top
- [ ] Language switching works (中/EN buttons)
- [ ] Project cards display correctly
- [ ] All project links work
- [ ] Mobile layout looks good
- [ ] Desktop layout looks good
- [ ] Animations work smoothly

## Post-Deployment

- [ ] Shared URL with others for testing
- [ ] Checked on different browsers
- [ ] Checked on mobile devices
- [ ] Verified SEO basics (title, meta tags)
- [ ] Set up basic analytics (optional)

## Maintenance

To add new projects:
- [ ] Edit `_data/projects.yml`
- [ ] Commit and push changes
- [ ] Wait 1-2 minutes for automatic deployment

## Common Issues

- **Site not loading**: Check DNS, wait for propagation
- **Design broken**: Clear cache, try different browser
- **Projects not showing**: Check YAML syntax
- **Language not switching**: Check JavaScript, clear cache

## Success Criteria

✅ All checklist items completed
✅ Site accessible at frankzh.top
✅ All features working as expected
✅ Ready to add new projects independently