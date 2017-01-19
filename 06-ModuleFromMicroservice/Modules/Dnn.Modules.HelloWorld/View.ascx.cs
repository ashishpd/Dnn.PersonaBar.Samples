using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.Entities.Modules;
using DotNetNuke.UI.UserControls;

namespace Dnn.Modules.HelloWorld
{
    public partial class View : PortalModuleBase
    {
        public bool userCanView = false;
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            userCanView = UserInfo.IsInRole("Admin");
        }
    }
}