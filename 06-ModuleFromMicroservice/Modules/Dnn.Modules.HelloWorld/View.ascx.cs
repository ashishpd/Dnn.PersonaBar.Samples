using System;
using DotNetNuke.Entities.Modules;

namespace Dnn.Modules.HelloWorld
{
    public partial class View : PortalModuleBase
    {
        public bool userCanView = false;
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            userCanView = UserInfo.IsInRole(PortalSettings.AdministratorRoleName);
        }
    }
}