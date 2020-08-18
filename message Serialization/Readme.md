In order to make sure both message not change use serialization , it acts like clone
it clone and then make change on the original structure.

Also note snaplogic does not copy the payload for array objects like employee.experience[].
it just hold reference. so if try to change the different array element data will be lost.
so 



    Expression                              | Target
    ========================================================
    JSON.parse($main.employee.id)           | payload.employee.id
    JSON.parse($main.employee.ledger.id)    | payload.employee.ledger.id


