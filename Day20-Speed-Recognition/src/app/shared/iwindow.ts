export interface Iwindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

export interface SpeechStat {
  transcript: string;
  confidence: number;
}
