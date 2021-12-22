// import Objects from "./Objects"

export default function Nav({ liName, index}) {
    return (
          <ul className="list-parent">
            <li className="list" key={index}>
                {liName} 
            </li>
        </ul>
    );
  }