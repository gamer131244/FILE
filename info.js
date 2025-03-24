export const Info = (message, Time)=>{
  if (Time === undefined) {
    Time = 3000;
  }
  var mainWrapper = document.createElement("div");
  mainWrapper.className = "main-wrappers"
  var htmlCode = `
    
    <div class="info-wrapper">
      <div class="info-class">
        <div class="info-main">
          <div class="info-title">
            <span> ⓘ </span> <span>${message == undefined ? "Hello There How're you Bro's." : message}</span>
          </div>
        </div>
      </div>
      <div class="info-button">
        <button>⤵</button>
      </div>
    </div>
    
    `;
    var stylee = document.createElement("style");
    var stylees = document.createTextNode(`
     
     .main-wrappers {
  position: absolute;
  height: 98%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  top: 0;
  pointer-events: none;
  margin-left: -8px;
  margin-top: 5px;
  transition: all 0.3s;
}


.info-wrapper {
  background: dimgray;
  color: white;
  padding: 5px;
  margin-bottom: 30px;
  width: 90%;
  border-radius: 10px;
  font-size: 16.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  animation: showInfo 0.2s linear;
  margin-left: 15px;
}

@keyframes showInfo {
  0%{
    transform: scale(0.5) scaleY(0) translateY(80px);
  }
}

@keyframes hideInfo {
  100% {
    transform: scale(0.5) scaleY(0) translateY(80px);
  }
}


.info-title {
  width: 325px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
}


.info-button {
  padding: 2px;
  background: dimgray;
  border-radius: 5px;
  pointer-events: auto;
  transition: all 0.2s;
}

.info-button button {
  background: transparent;
  color: white;
  border: none;
  font-size: 12px;
}

.info-button:active {
  background: dimgray;
}
      
    `);
    mainWrapper.innerHTML = htmlCode;
    stylee.appendChild(stylees);
    document.body.appendChild(mainWrapper);
    document.body.appendChild(stylee);
    setTimeout(()=>{
      mainWrapper.style.opacity = 0;
      setTimeout(()=>{
        mainWrapper.remove();
        stylee.remove();
      }, 500);
    }, Time);
}


