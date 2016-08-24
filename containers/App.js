import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends Component {
  render() {
    const { todos, actions } = this.props
    const forms = dataFORM.form;
    console.log(forms);
    const formElement = forms.map(form => {
      return <MainSection key={form._id} todos={todos} actions={actions} sectionForm={form} />
    })
    return (
      <div>
        {formElement}
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  dataFORM: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    // This data from Vika
    dataFORM: dataFORM
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
