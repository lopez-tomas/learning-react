import { fixName } from '../../pages/pokemon/[id]'
import { useState, useEffect } from 'react'
//import axios from 'axios'

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show" : "Hide"} content
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

const Ability = ({ url }) => {
  let ability = []
  const url__string = url.toString()

  ability = fetch(url__string).then(res => res.json())

  ability.then((data) => {
    console.log(data)
  })

  return (
    <div>
      <div>
        {ability[0]}
      </div>
      <p>description of <strong>{url}</strong></p>
    </div>
  )
}

const Abilities = ({ abilities }) => {
	return (
		<div>
			<h3>Abilities</h3>

			{abilities.map(ability =>
			  <div key={ability.ability.name}>
			    <p>{fixName(ability.ability.name)}</p>
				  <Collapse>
            <Ability url={ability.ability.url} />
				  </Collapse>
			  </div>
			)}
		</div>
	)
}

export default Abilities
