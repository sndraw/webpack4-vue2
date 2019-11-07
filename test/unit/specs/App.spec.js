import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Example from '@/pages/Example.vue'


describe('Example', () => {
  let wrapper,vm

  beforeEach(() => {
    wrapper = shallowMount(Example)
    wrapper.setProps({ msg: "测试" })
    vm = wrapper.vm
  })
  it('equals msg to "测试"', () => {
    expect(vm.msg).toEqual('测试')
  });
  it('Should have one button', () => {
    const button = wrapper.findAll('button') // 通过find来查找dom或者vue实例
    expect(button.length).toEqual(1)
  })
  it('click button', () => {
    //find后直接进行链式操作，否则find数据将缓存，影响判断
    wrapper.find('#example-button').trigger('click')
    wrapper.find('#example-button').trigger('click')
    expect(wrapper.find('#example-count').text()).toEqual("2")
  })
})
