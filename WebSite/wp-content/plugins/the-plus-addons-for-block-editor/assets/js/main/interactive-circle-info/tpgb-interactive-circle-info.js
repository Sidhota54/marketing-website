/* Interactive Circle Info Start */
let intCircle = document.querySelectorAll('.tpgb-interactive-circle-info');
if(intCircle){
    intCircle.forEach( el => {
        let mTrigger = el.getAttribute('data-trigger');
        let allRep = el.querySelectorAll('.tpgb-interactive-circle-item');
        allRep.forEach(e=>{

            let tglBtn = e.querySelector('.tpgb-circle-icon-wrap');

            if(mTrigger && mTrigger=='hover'){
                tglBtn.addEventListener("mouseenter",function(ev){
                    toggleFun(ev.currentTarget);
                })
            }
            if(mTrigger && mTrigger=='click'){
                tglBtn.addEventListener("click",function(ev){
                    toggleFun(ev.currentTarget);
                })
            }
        });

        if(mTrigger && mTrigger=='auto'){
            let autoTime  = Number(el.getAttribute('data-auto-time'));
            setInterval(function() {
                var active = el.querySelector('.tpgb-interactive-circle-item.active');
                if(active){
                    active.classList.remove('active'); 
                    if(!active.nextSibling){
                        let closeInn = active.closest('.interactive-circle-inner'),
                        firstItem = closeInn.firstElementChild;
                        if(firstItem){
                            firstItem.classList.add('active');
                        }
                    }else{
                        active.nextSibling.classList.add('active');
                    }
                }
            }, autoTime);
        }

    });
}

function toggleFun(tglBtn) {
    let closeRep = tglBtn.closest('.tpgb-interactive-circle-item');
    if(!closeRep.classList.contains('active')){
        let mainWrap = tglBtn.closest('.interactive-circle-inner');
        let allRep = mainWrap.querySelectorAll('.tpgb-interactive-circle-item');
        allRep.forEach(e=>{
            if(e.classList.contains('active')){
                e.classList.remove('active');
            }
        });
        closeRep.classList.add('active');
    }
}
/* Interactive Circle Info End */