import { fixName } from '../../pages/pokemon/[id]'
import { useState } from 'react'
import { abilities_styles } from '../../styles/pokemon'

const Ability = ({ url, is_collapsed }) => {
  const url__string = url.toString()
  let description_effect = ""

  const [description, setDescription] = useState([])

  let ability = fetch(url__string).then(res => res.json())

  ability.then((data) => {
    if (data.effect_entries[0] === undefined) {
      description_effect = data.flavor_text_entries[0].flavor_text
    } else {
      if (data.effect_entries[0].language.name == "en") {
        description_effect = data.effect_entries[0].short_effect
      } else {
        description_effect = data.effect_entries[1].short_effect
      }
    } 

    setDescription(description_effect)
  })

  return (
    <div style={is_collapsed ? abilities_styles.hide_description : abilities_styles.show_description}>
      <p style={abilities_styles.ability_description}>{description}</p>
    </div>
  )
}

const Abilities = ({ abilities }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

	return (
    <div style={{display: "block"}}>
			<h3>Abilities</h3>

			{abilities.map(ability =>
			  <div key={ability.ability.name}>
          <p
            style={abilities_styles.ability_name}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >{fixName(ability.ability.name)}
            <span style={!ability.is_hidden ? {display: "none"} : null}>
              <i style={abilities_styles.hidden_ability}> Hidden</i>
            </span>
            <>
            <span style={{marginLeft: "10px"}}>
              <strong>{!isCollapsed ? "v" : ">"}</strong>
            </span>
            </>
          </p>

          <Ability url={ability.ability.url} is_collapsed={isCollapsed} />
			  </div>
			)}
		</div>
	)
}

export default Abilities
