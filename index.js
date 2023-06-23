// Code your solution in this file!
function distanceFromHqInBlocks(turkey) {
    const hqPosition = 42; 
    return Math.abs(turkey - hqPosition); 
  }
  function distanceFromHqInFeet(turkey) {
    const feetPerBlock = 264; 
    const blocks = distanceFromHqInBlocks(turkey); 
    return blocks * feetPerBlock; 
  }
  function distanceTravelledInFeet(turkey, russia) {
    const feetPerBlock = 264; 
    const blocksTravelled = Math.abs(russia - turkey); 
    return blocksTravelled * feetPerBlock; 
}
function calculatesFarePrice(turkey, russia) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(russia - turkey) * feetPerBlock; 
    
    // Fare calculation based on distance
    if (distanceInFeet <= 400) {
      return 0; 
    } 
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceAfterFreeFeet = distanceInFeet - 400; 
      const farePrice = distanceAfterFreeFeet * 0.02; 
      return farePrice;
    } 
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25; 
    } 
    else if (distanceInFeet >= 2500) {
      return 'cannot travel that far'; 
    }
  }