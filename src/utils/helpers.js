export function buildBuilder(builder, request, name) {
  builder
    .addCase(request.pending, (state) => {
      state[name].loading = true
    })
    .addCase(request.fulfilled, (state, { payload }) => {
      state[name].loading = false
      state[name].list = payload
    })
    .addCase(request.rejected, (state) => {
      state[name].loading = false
    })
}