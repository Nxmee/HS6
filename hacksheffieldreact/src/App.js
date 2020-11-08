//handled by React
import React, {Component} from 'react';
import Colours from './components/Colours';
import SelectSite from './components/SelectSite';
import Header from './components/layout/header';
import './App.css';

export class App extends Component {
  state={
    colours: [{"id":0,"location":"mark","colour":"#ff0"},
    {"id":1,"location":"a.bg-success:hover,a.bg-success:focus","colour":"#c1e2b3"},
    {"id":2,"location":"a.bg-info:hover,a.bg-info:focus","colour":"#afd9ee"},
    {"id":3,"location":"a.bg-warning:hover,a.bg-warning:focus","colour":"#f7ecb5"},
    {"id":4,"location":"a.bg-danger:hover,a.bg-danger:focus","colour":"#e4b9b9"},
    {"id":5,"location":"code","colour":"#f9f2f4"},
    {"id":6,"location":".table-striped>tbody>tr:nth-of-type(odd)","colour":"#f9f9f9"},
    {"id":7,"location":".table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th","colour":"#e8e8e8"},
    {"id":8,"location":".btn-default:focus,.btn-default.focus,.btn-default:hover,.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default","colour":"#e6e6e6"},
    {"id":9,"location":".btn-default:active:hover,.btn-default.active:hover,.open>.dropdown-toggle.btn-default:hover,.btn-default:active:focus,.btn-default.active:focus,.open>.dropdown-toggle.btn-default:focus,.btn-default:active.focus,.btn-default.active.focus,.open>.dropdown-toggle.btn-default.focus","colour":"#d4d4d4"},
    {"id":10,"location":".btn-primary:active:hover,.btn-primary.active:hover,.open>.dropdown-toggle.btn-primary:hover,.btn-primary:active:focus,.btn-primary.active:focus,.open>.dropdown-toggle.btn-primary:focus,.btn-primary:active.focus,.btn-primary.active.focus,.open>.dropdown-toggle.btn-primary.focus","colour":"#204d74"},
    {"id":11,"location":".btn-success:active:hover,.btn-success.active:hover,.open>.dropdown-toggle.btn-success:hover,.btn-success:active:focus,.btn-success.active:focus,.open>.dropdown-toggle.btn-success:focus,.btn-success:active.focus,.btn-success.active.focus,.open>.dropdown-toggle.btn-success.focus","colour":"#398439"},
    {"id":12,"location":".btn-info:active:hover,.btn-info.active:hover,.open>.dropdown-toggle.btn-info:hover,.btn-info:active:focus,.btn-info.active:focus,.open>.dropdown-toggle.btn-info:focus,.btn-info:active.focus,.btn-info.active.focus,.open>.dropdown-toggle.btn-info.focus","colour":"#269abc"},
    {"id":13,"location":".btn-warning:active:hover,.btn-warning.active:hover,.open>.dropdown-toggle.btn-warning:hover,.btn-warning:active:focus,.btn-warning.active:focus,.open>.dropdown-toggle.btn-warning:focus,.btn-warning:active.focus,.btn-warning.active.focus,.open>.dropdown-toggle.btn-warning.focus","colour":"#d58512"},
    {"id":14,"location":".btn-danger:active:hover,.btn-danger.active:hover,.open>.dropdown-toggle.btn-danger:hover,.btn-danger:active:focus,.btn-danger.active:focus,.open>.dropdown-toggle.btn-danger:focus,.btn-danger:active.focus,.btn-danger.active.focus,.open>.dropdown-toggle.btn-danger.focus","colour":"#ac2925"},
    {"id":15,"location":".dropdown-menu .divider,.nav .nav-divider","colour":"#e5e5e5"},
    {"id":16,"location":".navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus","colour":"#e7e7e7"},
    {"id":17,"location":".navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus","colour":"#ddd"},
    {"id":18,"location":".navbar-default .navbar-toggle .icon-bar","colour":"#888"},
    {"id":19,"location":".navbar-inverse","colour":"#222"},
    {"id":20,"location":".navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu .divider,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus","colour":"#080808"},
    {"id":21,"location":".label-default[href]:hover,.label-default[href]:focus","colour":"#5e5e5e"},
    {"id":22,"location":"a.bg-primary:hover,a.bg-primary:focus,.btn-primary:focus,.btn-primary.focus,.btn-primary:hover,.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary,.label-primary[href]:hover,.label-primary[href]:focus","colour":"#286090"},
    {"id":23,"location":".btn-success:focus,.btn-success.focus,.btn-success:hover,.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success,.label-success[href]:hover,.label-success[href]:focus","colour":"#449d44"},
    {"id":24,"location":".btn-info:focus,.btn-info.focus,.btn-info:hover,.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info,.label-info[href]:hover,.label-info[href]:focus","colour":"#31b0d5"},
    {"id":25,"location":".btn-warning:focus,.btn-warning.focus,.btn-warning:hover,.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning,.label-warning[href]:hover,.label-warning[href]:focus","colour":"#ec971f"},
    {"id":26,"location":".btn-danger:focus,.btn-danger.focus,.btn-danger:hover,.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger,.label-danger[href]:hover,.label-danger[href]:focus","colour":"#c9302c"},
    {"id":27,"location":".label-default,.badge","colour":"#777"},
    {"id":28,"location":".btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus,.label-success,.progress-bar-success","colour":"#5cb85c"},
    {"id":29,"location":".btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus,.label-info,.progress-bar-info","colour":"#5bc0de"},
    {"id":30,"location":".btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus,.label-warning,.progress-bar-warning","colour":"#f0ad4e"},
    {"id":31,"location":".btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus,.label-danger,.progress-bar-danger","colour":"#d9534f"},
    {"id":32,"location":".form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control,.input-group-addon,.nav>li>a:hover,.nav>li>a:focus,.nav .open>a,.nav .open>a:hover,.nav .open>a:focus,.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus,.pager li>a:hover,.pager li>a:focus,.list-group-item.disabled,.list-group-item.disabled:hover,.list-group-item.disabled:focus","colour":"#eee"},
    {"id":33,"location":".table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th,a.list-group-item-success:hover,button.list-group-item-success:hover,a.list-group-item-success:focus,button.list-group-item-success:focus","colour":"#d0e9c6"},
    {"id":34,"location":".table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th,a.list-group-item-info:hover,button.list-group-item-info:hover,a.list-group-item-info:focus,button.list-group-item-info:focus","colour":"#c4e3f3"},
    {"id":35,"location":".table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th,a.list-group-item-warning:hover,button.list-group-item-warning:hover,a.list-group-item-warning:focus,button.list-group-item-warning:focus","colour":"#faf2cc"},
    {"id":36,"location":".table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th,a.list-group-item-danger:hover,button.list-group-item-danger:hover,a.list-group-item-danger:focus,button.list-group-item-danger:focus","colour":"#ebcccc"},
    {"id":37,"location":"kbd,.btn-default .badge,.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus,.panel-default>.panel-heading .badge","colour":"#333"},
    {"id":38,"location":".bg-primary,.btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus,.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus,.label-primary,.progress-bar,.list-group-item.active,.list-group-item.active:hover,.list-group-item.active:focus,.panel-primary>.panel-heading","colour":"#337ab7"},
    {"id":39,"location":"body,.img-thumbnail,.table .table,.form-control,.btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus,.btn-primary .badge,.btn-success .badge,.btn-info .badge,.btn-warning .badge,.btn-danger .badge,.dropdown-menu,.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus,.navbar-inverse .navbar-toggle .icon-bar,.pagination>li>a,.pagination>li>span,.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus,.pager li>a,.pager li>span,.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span,.list-group-item.active>.badge,.nav-pills>.active>a>.badge,.thumbnail,.list-group-item,.panel,.panel-primary>.panel-heading .badge","colour":"#fff"},
    {"id":40,"location":".bg-success,.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th,.has-success .input-group-addon,.alert-success,.list-group-item-success,.panel-success>.panel-heading","colour":"#dff0d8"},
    {"id":41,"location":"a.list-group-item-success.active,button.list-group-item-success.active,a.list-group-item-success.active:hover,button.list-group-item-success.active:hover,a.list-group-item-success.active:focus,button.list-group-item-success.active:focus,.panel-success>.panel-heading .badge","colour":"#3c763d"},
    {"id":42,"location":".bg-info,.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th,.alert-info,.list-group-item-info,.panel-info>.panel-heading","colour":"#d9edf7"},
    {"id":43,"location":"a.list-group-item-info.active,button.list-group-item-info.active,a.list-group-item-info.active:hover,button.list-group-item-info.active:hover,a.list-group-item-info.active:focus,button.list-group-item-info.active:focus,.panel-info>.panel-heading .badge","colour":"#31708f"},
    {"id":44,"location":"mark,.mark,.bg-warning,.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th,.has-warning .input-group-addon,.alert-warning,.list-group-item-warning,.panel-warning>.panel-heading","colour":"#fcf8e3"},
    {"id":45,"location":"a.list-group-item-warning.active,button.list-group-item-warning.active,a.list-group-item-warning.active:hover,button.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus,button.list-group-item-warning.active:focus,.panel-warning>.panel-heading .badge","colour":"#8a6d3b"},
    {"id":46,"location":".bg-danger,.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th,.has-error .input-group-addon,.alert-danger,.list-group-item-danger,.panel-danger>.panel-heading","colour":"#f2dede"},
    {"id":47,"location":"a.list-group-item-danger.active,button.list-group-item-danger.active,a.list-group-item-danger.active:hover,button.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus,button.list-group-item-danger.active:focus,.panel-danger>.panel-heading .badge","colour":"#a94442"},
    {"id":48,"location":"pre,.table-hover>tbody>tr:hover,.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.breadcrumb,a.list-group-item:hover,button.list-group-item:hover,a.list-group-item:focus,button.list-group-item:focus,.panel-footer,.panel-default>.panel-heading,.well","colour":"#f5f5f5"},
    {"id":49,"location":".tooltip-inner","colour":"#000"},
    {"id":50,"location":"#surveyResults .surveySwatch","colour":"#999 none repeat scroll 0%"}]
  }

  changeColour = (id, colour) => {
    this.setState({colours: this.state.colours.map((iteratecolour) => {
        console.log(iteratecolour.id)
        if(iteratecolour.id === id) {
            iteratecolour.colour = colour;
        }
        return iteratecolour
    }) })
    }

  setColours = (newColours) => this.setState({colours: newColours})

  delColour = (id) => {
    this.setState({colours: [...this.state.colours.filter(colour => colour.id !== id)]
    });
  }

  render() {
    return (
    //where things go for the page  
      <div className="App">
        <div className="container">
          <Header/>
          <SelectSite setColours={this.setColours}/>
          <div className="Colours" style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            <Colours colours={this.state.colours} delColour={this.delColour} changeColour={this.changeColour}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
