import { useEventListener } from "./reacthaiku";

export function useClickOutsideNav(ref, handler, event = ['mousedown']) {
  useEventListener(event, event => {
      const el = ref?.current;
      if (!el || el.contains(event.target) || event.target.id === 'safe-nav-btn' || event.target.id === 'safe-nav-icon') return;

      handler(event);
  })
}