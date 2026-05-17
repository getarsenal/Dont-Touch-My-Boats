import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.scheidelholdings.dontouchmyboats',
  appName: "Don't Touch My Boats",
  webDir: 'www',
  ios: {
    contentInset: 'always',
    scrollEnabled: false,
    backgroundColor: '#080604',
    allowsLinkPreview: false,
  },
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor',
  },
};

export default config;
