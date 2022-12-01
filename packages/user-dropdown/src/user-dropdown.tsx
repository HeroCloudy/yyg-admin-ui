import { computed, defineComponent } from 'vue'
import { userDropdownProps } from './types'

const NAME = 'yyg-user-dropdown'

export default defineComponent({
  name: NAME,
  props: userDropdownProps,
  emits: ['avatar-click'],
  setup (props, context) {
    const isItemsExists = computed(() => props.dropdownItems && props.dropdownItems.length > 0)

    const onAvatarClick = () => {
      if (!isItemsExists.value) {
        context.emit('avatar-click')
      }
    }

    const renderAvatar = () => (
      <div class="avatar-wrapper" onClick={onAvatarClick}>
        <el-avatar shape="circle" size={props.size} src={props.avatar} >{props.defaultAvatarText}</el-avatar>
      </div>
    )
    const innerSlots = {
      default: renderAvatar,
      dropdown: () => (
        isItemsExists.value
          ? (
          <el-dropdown-menu>
            { props.dropdownItems.map(item => (
              <el-dropdown-item divided={item.isDivided} onClick={item.click}>{item.title}</el-dropdown-item>
            ))}
          </el-dropdown-menu>)
          : null
      )
    }
    return () => (
      <div class={NAME}>
        {
          isItemsExists.value
            ? (<el-dropdown className={NAME} trigger="click" v-slots={innerSlots}></el-dropdown>)
            : renderAvatar()
        }
      </div>
    )
  }
})
