(ns clodustry.prod
  (:require
    [clodustry.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
