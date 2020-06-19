<template>
    <div id="app" class="h-100">
        <sidebar-menu/>
        <div class="app-container">
            <div class="w-100 text-left app-top-bar">
                <realtime/>
            </div>
            <div class="app-content-container">
                <app-toasts/>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu'
import Realtime from '@/components/Realtime'
import AppToasts from '@/components/AppToasts'
export default {
  name: 'ConnectedTemplate',
  components: { AppToasts, Realtime, SidebarMenu },
}
</script>
