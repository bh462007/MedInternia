// GSSoC: Added Footer component — brand description, quick links, social icons, copyright
import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material';

const footerLinks = [
  { label: 'Cases', href: '/cases' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="Site footer"
      sx={{
        background: 'linear-gradient(120deg, #1565c0 0%, #2193b0 100%)',
        color: '#fff',
        py: 5,
        px: { xs: 3, md: 8 },
        mt: 'auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Brand */}
        <Box sx={{ maxWidth: 300 }}>
          <Typography variant="h6" fontWeight={900} sx={{ letterSpacing: 1, mb: 1 }}>
            MedInternia
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7 }}>
            Your gateway to medical learning, peer collaboration, career opportunities, and live webinars.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{ mb: 1.5, opacity: 0.7, textTransform: 'uppercase', letterSpacing: 1 }}
          >
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref legacyBehavior>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: '#fff',
                    opacity: 0.85,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 1, textDecoration: 'underline' },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Socials */}
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{ mb: 1.5, opacity: 0.7, textTransform: 'uppercase', letterSpacing: 1 }}
          >
            Connect
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="MedInternia on GitHub"
              component="a"
              href="https://github.com/medinternia"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff', '&:hover': { background: 'rgba(255,255,255,0.15)' } }}
            >
              <Github size={20} />
            </IconButton>
            <IconButton
              aria-label="MedInternia on Twitter"
              component="a"
              href="https://twitter.com/medinternia"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff', '&:hover': { background: 'rgba(255,255,255,0.15)' } }}
            >
              <Twitter size={20} />
            </IconButton>
            <IconButton
              aria-label="Email MedInternia"
              component="a"
              href="mailto:medinternia@gmail.com"
              sx={{ color: '#fff', '&:hover': { background: 'rgba(255,255,255,0.15)' } }}
            >
              <Mail size={20} />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.18)' }} />

      <Typography variant="body2" align="center" sx={{ opacity: 0.65 }}>
        © {new Date().getFullYear()} MedInternia. All rights reserved.
      </Typography>
    </Box>
  );
}
