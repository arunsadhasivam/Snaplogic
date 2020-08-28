Retry Mechanism

        _______(error) $unacknowledged -(A)
        |
        |
        consumer(kafka) - > 

                  $.hasPath("unacknowledged") && $unacknowledged != null         
          -(A) - Router---(yes)-- jsonspliter($unacknowledged)
                  |
                  (no)

