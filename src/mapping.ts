import { Domain_Added } from '../generated/Sedo/Sedo_Network'
import { Domain } from '../generated/schema'

export function handleNewDomain (event: Domain_Added): void {
  let domain = new Domain(event.params.domain)
  domain.owner = event.params.curr_owner
  domain.domain = event.params.domain
  domain.save()
}

