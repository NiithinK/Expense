import PieGraph from "./PieChaert";

export default function ExpenseChart({expenses}){
  return(
    <div className="graph">
      <PieGraph expenses={expenses}/>
    </div>
  )
}