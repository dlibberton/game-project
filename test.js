/*I want to make a game
Basic autochess board
U-U-U-U
-X-X-X-
T-T-T-T
=======
objects at T will collide with other users board T

const tUnit = { health(number), damage(number) } other attributes possible
const xUnit = { health(number), damage(number) } 
X unit unique traits may be different from t units
X units jump to U units at certain times
others remain stationary and asses combat values directly across from each other
when unit across does not exist, unit reasses based on proximity
events may trigger granting modifiers to existing attributes
unique attributes stored in object can have a values of 0 until iterated by specialEvent
*/ 
