generate: generate-ts generate-go

generate-ts:
	protoc \
	--plugin=protoc-gen-ts=./client/node_modules/.bin/protoc-gen-ts \
	--ts_opt=unary_rpc_promise=true \
	--ts_opt=no_namespace \
	--ts_opt=json_names \
	--ts_out=./client/ \
	-I=./ \
	build.proto

generate-go:
	protoc \
	--go_out=server/internal/ \
	--go_opt=paths=source_relative \
	--go-grpc_out=server/internal/ \
	--go-grpc_opt=paths=source_relative build.proto
