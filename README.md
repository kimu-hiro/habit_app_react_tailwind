# Habit Tracker App

Reactで作成した習慣記録アプリです。
習慣の追加・カウント・並び替え・削除ができ、localStorageでデータを保存します。

---

## 🔧 使用技術

* React (Vite)
* JavaScript
* Tailwind CSS
* localStorage

---

## 📱 機能一覧

* 習慣の追加
* カウントの増減（+ / -）
* 習慣の削除
* 並び替え（↑ / ↓）
* データの永続化（localStorage）

---

## 🧠 工夫した点

* 配列の順番がUIに反映されることを理解し、swapで並び替えを実装
* localStorageとuseStateを連携させてデータの保存・復元を実現
* 「思考 → 検証 → 圧縮」の学習フローを取り入れて理解ベースで実装

---

## ⚠️ 苦労した点

* localStorageの保存と読み込みの順序でバグが発生した
* 初期値とuseEffectの関係を理解するのに時間がかかった
* JSON.stringify / parseの扱いに最初戸惑った

---

## 🚀 今後の改善

* デザインのブラッシュアップ
* 編集機能の追加
* データのバックエンド管理（Firebaseなど）

---

## 📌 学習記録

習慣アプリを通して、Reactの状態管理・配列操作・副作用(useEffect)の理解が深まりました。
