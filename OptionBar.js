import {Info} from 'https://gamer131244.github.io/FILE/Info.js';

export const Options = (lenght, Fun, Property) => {
  
  console.log(lenght, Fun, Property);
  
  if (Fun == undefined || Fun == "" || Fun == null) {
    Fun = [];
  }
  
  if (lenght == undefined) {
    lenght = {
      0: ["Option 0"],
      1: ["Option 1"],
      2: ["Option 2"],
      3: ["Option 3"],
      4: ["Option 4"],
      5: ["Option 5"],
      6: ["Option 6"],
      7: ["Option 7"]
    }
  }
  var blocks = document.createElement("div");
  blocks.className = "blocks";
  blocks.style.height = outerHeight - 30 + "px";
  blocks.style.width = outerWidth - 20 + "px";
  var mainWrapper = document.createElement("div");
  mainWrapper.className = "main-wrapper";
  var optionWrapper = document.createElement("div");
  optionWrapper.className = "option-wrapper";
  var optionClass = document.createElement("div");
  optionClass.className = "option-class";
  var optionMain = document.createElement("div");
  optionMain.className = "option-main";
  var opt = document.createElement("div");
  opt.className = "opt";
  mainWrapper.appendChild(optionWrapper);
  optionWrapper.appendChild(optionMain);
  optionMain.appendChild(opt);
  var OptionLength = lenght;
  var ExitBtn = document.createElement("span");
  var Exit = document.createTextNode("Exit");
  ExitBtn.appendChild(Exit);
  Object.entries(OptionLength).forEach(([key, value]) => {
    value.forEach((index) => {
      var OptionList = document.createElement("span");
      var OptionTitle = document.createTextNode(index);
      OptionList.appendChild(OptionTitle);
      opt.appendChild(OptionList);
      OptionList.addEventListener("click", Fun[key]);
    });
    
  });
  opt.appendChild(ExitBtn);
  var style = document.createElement("style");
  var styles = document.createTextNode(`
  
  .option-wrapper {
  margin-top: ${Property.marginTop }px;
  margin-left: ${Property.marginLeft - outerWidth + outerWidth-Property.width.replace("px", "") }px;
  position: absolute;
  z-index: 999999;
  max-height: 250px;
  min-height: 50px;
  max-height: 300px;
  width: ${Property.width == undefined ? "120px" : Property.width};
  background: ${Property.BG == undefined ? "white" : Property.BG };
  padding: 5px;
  border-radius: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  transform-origin: top;
  animation: showBar 0.2s linear;
  box-shadow: 1px 1px 3px ${Property.shadowColor == undefined ? "black" : Property.shadowColor };
  color: ${Property.color == undefined || Property.color == "" ? "black" : Property.color }
}

@keyframes showBar {
  0%{
    transform: scaleY(0)
  }
}

@keyframes hideBar {
  100%{
    transform: scaleY(0);
  }
}


.option-wrapper .opt {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px;
  font-size: 17.6px;
}


.opt span {
  border-bottom: 1px solid black;
  width: 98%;
  margin-top: 5px;
  padding: 2px;
  padding-left: 4px;
  transition: all 0.5s;
  border-radius: 1px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.opt span:last-child{
  margin-top: 10px;
  border: none;
  text-align: center;
  border-radius: 3px;
  height: auto;
  position: sticky;
  bottom: 1px;
  background: ${Property.BG == undefined ? "white" : Property.BG };
}


.opt span:active {
  background: lightgray;
}


.opt span:last-child:active {
  background: indianred;
}



.main-wrapper {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: transparent;
  height: 98%;
  width: 97%;
  position: absolute;
}

.blocks {
  position: absolute;
  top: 20px;
  background: transparent;
  z-index: 999;
}
  
     `);
  
  style.appendChild(styles);
  document.body.appendChild(blocks);
  document.body.appendChild(mainWrapper);
  document.body.appendChild(style);
  blocks.addEventListener("touchstart", () => {
    blocks.addEventListener("click", () => {
      try {
        ExitBtn.click();
      } catch (e) {
        alert(e)
      }
    });
  });
  ExitBtn.addEventListener("click", () => {
    try {
      setTimeout(() => {
        try {
          // Tab to edit
          document.querySelector(".option-wrapper").style.animation = "hideBar 0.1s linear";
        } catch (e) {
          Info("Please wait Other Response's.");
        }
        setTimeout(() => {
          try {
            document.querySelector(".main-wrapper").remove();
            document.querySelector(".blocks").remove();
            style.remove();
          } catch (e) {
            Info("Current Server already Responded.");
          }
        }, 100);
      }, 100);
    } catch (e) {
      Info("Network's busy.");
    }
  });
}


