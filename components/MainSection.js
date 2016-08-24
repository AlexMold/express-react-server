import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import TopBlock from './TopBlock'



class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  section(section) {
    switch (section._id) {
      case "2920":  return <TopBlock photoForm={section} />;
      case "2916":  return <ol photoForm_2={section} />;
      case "2917":  return <ul photoForm_3={section} />;
      case "2918":  return <p photoForm_4={section} />;
      case "2919":  return <a photoForm_5={section} />;
      default:    return "#FFFFFF";
    }
  }

  render() {
    const { todos, actions, sectionForm } = this.props;

    return (
      <div>
        { this.section(sectionForm) }
      </div>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  photoForm: PropTypes.object,
  sectionForm: PropTypes.object,
  actions: PropTypes.object.isRequired
}

export default MainSection
