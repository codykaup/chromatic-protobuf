import { BuildServiceClient } from './build_grpc_pb';
import { BuildRequest } from './build_pb';
import * as grpc from '@grpc/grpc-js';

function main() {
  const client = new BuildServiceClient(
    'localhost:8080',
    grpc.credentials.createInsecure()
  );

  const request = new BuildRequest();
  request.setId(1).setCaptureCount(10).setTraceHeader('some-trace-header');

  client.createBuild(request, (err, response) => {
    if (err) {
      console.error('Got error from server', err);
      return;
    }
    console.log('Got response from server', response.toObject());
  });
}
main();
