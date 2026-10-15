/*
  Donut Mania v20 - Difficulty / balance settings

  基本的な難易度調整はこのファイルだけ編集すれば変更できます。
  時間はミリ秒です。1000 = 1秒。

  客の会計金額:
  - 注文を渡した瞬間の待ち時間メーター残量で3段階
  - プレーン / トッピング付きで別価格
*/
window.GAME_CONFIG = {
  // ===== Stage =====
  GOAL: 1500,                 // 目標売上
  DAY_MS: 120000,            // 営業時間（2分）

  // ===== Processing / interaction =====
  MACHINE_MS: 4500,          // 機械1工程の加工時間
  PAYMENT_DELAY_MS: 3000,    // 商品を渡してからお金が置かれるまで
  ORDER_DELAY_MS: 2000,      // 注文を聞いてから注文が表示されるまで
  PLAYER_SPEED: 0.0008,     // 主人公の移動速度

  // ===== Customer patience =====
  CUSTOMER_PATIENCE_MIN_MS: 50000,
  CUSTOMER_PATIENCE_RANDOM_MS: 30000,
  MAX_CUSTOMERS_VISIBLE: 4,

  // 来店時刻。営業開始からの経過時間。
  // 最初の1人は営業開始時に出現するため、ここには2人目以降を書く。
  ARRIVALS: [9000, 22000, 40000, 48000, 60000 , 70000, 90000, ],

  // ===== Reward thresholds =====
  // 残り待ち時間が 0.50 (50%) 以上なら EARLY
  // 0.25 (25%) 以上 0.50 未満なら MID
  // 0.25 未満なら LATE
  REWARD_HALF_THRESHOLD: 0.5,
  REWARD_QUARTER_THRESHOLD: 0.25,

  // ===== Plain donut reward =====
  PLAIN_REWARD_EARLY: 200,
  PLAIN_REWARD_MID: 150,
  PLAIN_REWARD_LATE: 50,

  // ===== Topped donut reward =====
  TOPPED_REWARD_EARLY: 350,
  TOPPED_REWARD_MID: 250,
  TOPPED_REWARD_LATE: 100
};
