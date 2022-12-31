import '../../styles/model/index.css';
import { useSelector } from "react-redux";

const Model = ()=>{

    const selector = useSelector((state) => state.ModelReducer);
    console.log(selector);

return<div className="divContainerModel00">
   <div className='divContainerModel01' style={{backgroundImage:`url("${selector.selectionImg}")`}}></div>
</div> }

export default Model;