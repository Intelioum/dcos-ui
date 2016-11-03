import Agents from '../agents/schema';
import Groups from '../groups/schema';

import { Paginate } from '../../utils/connections';

const Cluster = `
  type Cluster {
    agent(
      # The ID of the Agent
      id: String!
    ): Agent

    # Agents in the cluster
    agents(after: String, first: Int, before: String, last: Int): AgentConnection

    group(
      # The ID of the Group
      id: String
    ): Group

    # Flat list of nested groups
    groups(groupId: String, after: String, first: Int, before: String, last: Int): GroupConnection
  }
`;

export default () => [Cluster, Agents, Groups];
