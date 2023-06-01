generate: generate-ts generate-go

generate-ts:
	# generate js codes via grpc-tools
	cd ./client && yarn run grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./ \
	--grpc_out=grpc_js:./ \
	--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
	-I ../ \
	build.proto

	# generate d.ts codes
	protoc \
	--plugin=protoc-gen-ts=./client/node_modules/.bin/protoc-gen-ts \
	--ts_out=grpc_js:./client/ \
	-I ./ \
	build.proto

generate-go:
	protoc \
	--go_out=server/internal/ \
	--go_opt=paths=source_relative \
	--go-grpc_out=server/internal/ \
	--go-grpc_opt=paths=source_relative build.proto
