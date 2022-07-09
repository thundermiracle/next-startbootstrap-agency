import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
  shortcuts: {
    'sns-icon': 'text-10 inline-block hover:text-primary transition delay-50 ease-in-out',
    'rounded-img-border': 'b-7 border-gray-200 rounded-full',
    'f-center': 'flex justify-center items-center',
  },
  rules: [[/^hw-(\d+)px$/, ([, length]) => ({ height: `${length}px`, width: `${length}px` })]],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray100: '#f8f9fa',
      gray200: '#e9ecef',
      gray300: '#dee2e6',
      gray400: '#ced4da',
      gray500: '#adb5bd',
      gray600: '#868e96',
      gray700: '#495057',
      gray800: '#343a40',
      gray900: '#212529',
      primary: '#fed136',
      muted: '#868e96',
    },
  },
});
