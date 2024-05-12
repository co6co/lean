
import {ref ,onMounted,onUnmounted} from 'vue'
function userMousePosition(){
    const x=ref(0)
    const y= ref(0)
    const updateMoust=(e:MouseEvent) =>{
        x.value=e.pageX;
        y.value=e.pageY
    }
    onMounted(()=>{
        document.addEventListener("click",updateMoust)
    })
    onUnmounted(()=>{
        document.removeEventListener("click",updateMoust)
    })
    return {x,y}
}

export default userMousePosition
///const {x,y} =userMousePosition()