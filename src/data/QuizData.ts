// data/quizData.ts
export interface QuizItem {
  question: string;
  options: string[];
  answer: string;
}

const quizData: QuizItem[] = [
  {
    question: "algorithm",
    options: ["アルゴリズム", "データベース", "ネットワーク", "セキュリティ"],
    answer: "アルゴリズム",
  },
  {
    question: "database",
    options: ["サーバー", "データベース", "アルゴリズム", "ネットワーク"],
    answer: "データベース",
  },
  {
    question: "network",
    options: ["データベース", "セキュリティ", "ネットワーク", "アルゴリズム"],
    answer: "ネットワーク",
  },
  {
    question: "security",
    options: ["ネットワーク", "セキュリティ", "サーバー", "データベース"],
    answer: "セキュリティ",
  },
  {
    question: "server",
    options: ["アルゴリズム", "セキュリティ", "データベース", "サーバー"],
    answer: "サーバー",
  },
  {
    question: "encryption",
    options: ["暗号化", "圧縮", "バックアップ", "復号化"],
    answer: "暗号化",
  },
  {
    question: "compression",
    options: ["復号化", "圧縮", "バックアップ", "暗号化"],
    answer: "圧縮",
  },
  {
    question: "backup",
    options: ["圧縮", "復号化", "バックアップ", "暗号化"],
    answer: "バックアップ",
  },
  {
    question: "protocol",
    options: ["プロトコル", "サーバー", "データベース", "ネットワーク"],
    answer: "プロトコル",
  },
  {
    question: "firewall",
    options: ["セキュリティ", "プロトコル", "ファイアウォール", "ネットワーク"],
    answer: "ファイアウォール",
  },
  {
    question: "bandwidth",
    options: ["ネットワーク", "データベース", "帯域幅", "アルゴリズム"],
    answer: "帯域幅",
  },
  {
    question: "malware",
    options: ["サーバー", "ネットワーク", "マルウェア", "セキュリティ"],
    answer: "マルウェア",
  },
  {
    question: "cloud",
    options: ["クラウド", "データベース", "サーバー", "セキュリティ"],
    answer: "クラウド",
  },
  {
    question: "virtualization",
    options: ["仮想化", "クラウド", "データベース", "ネットワーク"],
    answer: "仮想化",
  },
  {
    question: "router",
    options: ["ルーター", "ファイアウォール", "プロトコル", "サーバー"],
    answer: "ルーター",
  },
  {
    question: "switch",
    options: ["スイッチ", "サーバー", "ネットワーク", "プロトコル"],
    answer: "スイッチ",
  },
  {
    question: "latency",
    options: ["遅延", "帯域幅", "プロトコル", "圧縮"],
    answer: "遅延",
  },
  {
    question: "throughput",
    options: ["帯域幅", "遅延", "スループット", "プロトコル"],
    answer: "スループット",
  },
  {
    question: "IP address",
    options: ["IPアドレス", "サーバー", "ネットワーク", "プロトコル"],
    answer: "IPアドレス",
  },
  {
    question: "DNS",
    options: ["ドメインネームシステム", "IPアドレス", "サーバー", "プロトコル"],
    answer: "ドメインネームシステム",
  },
];

export default quizData;
